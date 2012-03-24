package pur.gwtplatform.samples.presenter;

import java.util.ArrayList;
import java.util.List;

import org.fusesource.restygwt.client.JsonCallback;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.Resource;

import pur.gwtplatform.samples.events.UpdateLocalStorageEvent;
import pur.gwtplatform.samples.events.UpdateLocalStorageEvent.InsertCompleteHandler;
import pur.gwtplatform.samples.model.Data;
import pur.gwtplatform.samples.modules.NameTokens;
import pur.gwtplatform.samples.views.IMainView;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.SuggestOracle;
import com.google.gwt.user.client.ui.SuggestOracle.Suggestion;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.shared.DispatchAsync;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.proxy.RevealRootContentEvent;
import com.gwtplatform.mvp.client.proxy.RevealRootPopupContentEvent;

public class MainPresenter extends Presenter<IMainView, MainPresenter.MyProxy> {
	private MultiWordSuggestOracle oracle = new MultiWordSuggestOracle();
	private EventBus eventBus;
	private final PlaceManager placeManager;
	private Storage stockstore = null;
	private List<Data> liste = new ArrayList<Data>(10);
	private DataGrid dataGrid = null;
	private DialogPresenter dialogPresenter;
	private DeleteDialogPresenter deleteDialogPresenter;

	private TextColumn<Data> idColumn = new TextColumn<Data>() {

		@Override
		public String getValue(Data data) {
			return data.getKey();
		}
	};

	private TextColumn<Data> valueColumn = new TextColumn<Data>() {

		@Override
		public String getValue(Data data) {
			return data.getValue();
		}
	};

	@ProxyCodeSplit
	@NameToken(NameTokens.main)
	public interface MyProxy extends ProxyPlace<MainPresenter> {

	}

	@Inject
	public MainPresenter(EventBus eventBus, IMainView view, MyProxy proxy, PlaceManager placeManager,
			DispatchAsync dispatcher, DialogPresenter dialogPresenter, DeleteDialogPresenter deleteDialogPresenter) {
		super(eventBus, view, proxy);
		this.eventBus = eventBus;
		this.placeManager = placeManager;
		this.dialogPresenter = dialogPresenter;
		this.deleteDialogPresenter = deleteDialogPresenter;
	}

	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}

	/**
	 * Use this in leaf presenters, inside their {@link #revealInParent} method.
	 */
	@ContentSlot
	public static final Type<RevealContentHandler<?>> TYPE_SetMainContent = new Type<RevealContentHandler<?>>();

	@Override
	protected void onBind() {
		super.onBind();
		initDataGrid();
		refreshDataGrid();
		enregistrerBoutonValider();
		gererEvenements();
		enregistrerBoutonASR();
		gererAutoCompleteBox();
		enregistrerBoutonOuvPopupSaisie();
		enregistrerBoutonOuvPopupSupp();

	}

	private void enregistrerBoutonOuvPopupSaisie() {
		registerHandler(getView().getOpsButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {				
				openPopup();
			}

		}));
	}
	
	private void enregistrerBoutonOuvPopupSupp() {
		registerHandler(getView().getOpdButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {				
				openPopupSupp();
			}

		}));
	}

	private void gererAutoCompleteBox() {
		registerHandler(getView().getsBox().addSelectionHandler(new SelectionHandler<SuggestOracle.Suggestion>() {

			@Override
			public void onSelection(SelectionEvent<Suggestion> event) {
				String value = event.getSelectedItem().getReplacementString();
				Storage stockstore = Storage.getLocalStorageIfSupported();
				if (stockstore != null) {
					stockstore.removeItem(value);
					refreshDataGrid();
				}
			}
		}));
	}

	private void enregistrerBoutonASR() {
		registerHandler(getView().getAsrButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				Resource resource = new Resource("/pur/data/mp/get");
				resource.get().send(new JsonCallback() {
					public void onSuccess(Method method, JSONValue response) {
						JSONObject keys = response.isObject().get("keys").isObject();
						JSONArray array = keys.get("keys").isArray();
						for (int i = 0; i < array.size(); i++) {
							JSONObject jsObject = array.get(i).isObject();
							String value = jsObject.get("value").isString().stringValue();
							String key = jsObject.get("key").isString().stringValue();
							Storage stockstore = Storage.getLocalStorageIfSupported();
							if (stockstore != null) {
								stockstore.setItem(key, value);
							}
						}
						refreshDataGrid();
					}

					public void onFailure(Method method, Throwable exception) {
						Window.alert("onFailure: " + exception);
					}
				});

			}
		}));
	}

	private void gererEvenements() {
		registerHandler(eventBus.addHandler(UpdateLocalStorageEvent.TYPE, new InsertCompleteHandler() {
			public void onInsertComplete(UpdateLocalStorageEvent event) {
				refreshDataGrid();
			}
		}));
	}

	private void enregistrerBoutonValider() {
		registerHandler(getView().getValiderButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				placeManager.revealPlace(new PlaceRequest(NameTokens.msg));
			}
		}));
	}

	private void initDataGrid() {
		idColumn.setSortable(true);

		dataGrid = getView().getDataGrid();
		dataGrid.addColumn(idColumn, "ID");
		dataGrid.addColumn(valueColumn, "Value");
		dataGrid.setRowData(liste);
		dataGrid.setColumnWidth(idColumn, "100px");
		dataGrid.setColumnWidth(valueColumn, "300px");
	}

	private void openPopup() {
		RevealRootPopupContentEvent.fire(this, dialogPresenter);		
	}
	
	private void openPopupSupp() {
		RevealRootPopupContentEvent.fire(this, deleteDialogPresenter);		
	}
	
	private void refreshDataGrid() {
		SuggestBox box = getView().getsBox();
		oracle = (MultiWordSuggestOracle) getView().getsBox().getSuggestOracle();
		stockstore = Storage.getLocalStorageIfSupported();
		if (stockstore != null) {
			liste.clear();
			oracle.clear();
			for (int i = 0; i < stockstore.getLength(); i++) {
				String key = stockstore.key(i);
				String value = stockstore.getItem(key);
				liste.add(new Data(key, value));
				oracle.add(key);
			}
			dataGrid.setRowData(liste);
			// getView().getSimplePagerGrid().setDisplay(dataGrid);
			getView().getPanel1().setVisible(true);

		}
		int hauteur = 35 + (25 * liste.size());
		dataGrid.setSize("400px", String.valueOf(hauteur) + "px");
	}

}
