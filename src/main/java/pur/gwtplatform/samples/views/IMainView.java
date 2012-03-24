package pur.gwtplatform.samples.views;

import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.gwtplatform.mvp.client.View;

public interface IMainView extends View {
	Button getValiderButton();

	DataGrid<Object> getDataGrid();

	Label getLabelStock();

	VerticalPanel getPanel1();

	Button getAsrButton();

	SuggestBox getsBox();

	void setsBox(SuggestBox sBox);
	
	Button getOpsButton();

}