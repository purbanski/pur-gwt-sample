package pur.gwtplatform.samples.presenter;

import java.util.ArrayList;
import java.util.List;

import org.fusesource.restygwt.client.JsonCallback;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.Resource;

import pur.gwtplatform.samples.events.InsertCompleteEvent;
import pur.gwtplatform.samples.events.InsertCompleteEvent.InsertCompleteHandler;
import pur.gwtplatform.samples.model.Data;
import pur.gwtplatform.samples.modules.NameTokens;
import pur.gwtplatform.samples.views.IMainView;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.SuggestOracle;
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

public class MainPresenter extends Presenter<IMainView, MainPresenter.MyProxy> {
	private MultiWordSuggestOracle oracle = new MultiWordSuggestOracle();
	private EventBus eventBus;
	private final PlaceManager placeManager;
	private Storage stockstore = null;
	private List<Data> liste = new ArrayList<Data>(10);
	private DataGrid dataGrid = null;
	private TextColumn<Data> idColumn = new TextColumn<Data>() {

		@Override
		public String getValue(Data data) {
			return data.getId();
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
			DispatchAsync dispatcher) {
		super(eventBus, view, proxy);
		this.eventBus = eventBus;
		this.placeManager = placeManager;
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

		SuggestBox box = getView().getsBox();
		oracle = (MultiWordSuggestOracle) getView().getsBox().getSuggestOracle();
		oracle.add("Cat");
		oracle.add("Dog");
		oracle.add("Horse");
		oracle.add("Canary");
		dataGrid = getView().getDataGrid();
		dataGrid.addColumn(idColumn, "ID");
		dataGrid.addColumn(valueColumn, "Value");
		dataGrid.setRowData(liste);
		dataGrid.setColumnWidth(idColumn, "100px");
		dataGrid.setColumnWidth(valueColumn, "300px");
		refreshDataGrid();

		registerHandler(getView().getValiderButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				placeManager.revealPlace(new PlaceRequest(NameTokens.msg));
			}
		}));

		registerHandler(eventBus.addHandler(InsertCompleteEvent.TYPE, new InsertCompleteHandler() {
			public void onInsertComplete(InsertCompleteEvent event) {
				// refresh datagrid
				liste.add(new Data(event.getData().getId(), event.getData().getValue()));
				dataGrid.setRowData(liste);
			}
		}));

		registerHandler(getView().getAsrButton().addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {

				Resource resource = new Resource("http://localhost:8080/RestWeb/jsonWS");
				resource.post().send(new JsonCallback() {
					public void onSuccess(Method method, JSONValue response) {
						System.out.println(response);
						Window.alert(" ! onSuccess:" + response);
					}

					public void onFailure(Method method, Throwable exception) {
						Window.alert("onFailure: " + exception);
					}
				});

			}
		}));

	}

	private void refreshDataGrid() {
		stockstore = Storage.getLocalStorageIfSupported();
		if (stockstore != null) {
			liste.clear();
			for (int i = 0; i < stockstore.getLength(); i++) {
				String key = stockstore.key(i);
				String value = stockstore.getItem(key);
				liste.add(new Data(key, value));
			}
			dataGrid.setRowData(liste);
			// getView().getSimplePagerGrid().setDisplay(dataGrid);
			getView().getPanel1().setVisible(true);

		}
	}

}
