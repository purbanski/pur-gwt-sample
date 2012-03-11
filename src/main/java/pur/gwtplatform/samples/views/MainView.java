package pur.gwtplatform.samples.views;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;

public class MainView extends ViewImpl implements IMainView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, MainView> {
	}

	@Inject
	public MainView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}

	@UiField
	Button validerButton;
	@UiField(provided = true)
	DataGrid<Object> dataGrid = new DataGrid<Object>();
	@UiField
	Label labelStock;
	@UiField
	VerticalPanel panel1;
	@UiField
	Button asrButton;
	@UiField
	SuggestBox sBox;

	public Button getValiderButton() {
		return validerButton;
	}

	public DataGrid<Object> getDataGrid() {
		return dataGrid;
	}

	public Label getLabelStock() {
		return labelStock;
	}

	public VerticalPanel getPanel1() {
		return panel1;
	}

	public Button getAsrButton() {
		return asrButton;
	}

	public SuggestBox getsBox() {
		return sBox;
	}

	public void setsBox(SuggestBox sBox) {
		this.sBox = sBox;
	}

}
