package pur.gwtplatform.samples.views;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.View;

public interface IMessageInsertView extends View {
	Widget getWidget();

	TextBox getKeyStock();

	TextBox getDataStock();

	Button getInsertButton();

	Button getCancelButton();

}
