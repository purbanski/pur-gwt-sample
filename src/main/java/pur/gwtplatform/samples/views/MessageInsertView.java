package pur.gwtplatform.samples.views;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;

public class MessageInsertView extends ViewImpl implements IMessageInsertView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, MessageInsertView> {
	}

	@Inject
	public MessageInsertView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField TextBox keyStock;
	@UiField TextBox dataStock;	
	@UiField Button insertButton;
	@UiField Button cancelButton;
	

	public Widget getWidget() {
		return widget;
	}

	public TextBox getKeyStock() {
		return keyStock;
	}

	public TextBox getDataStock() {
		return dataStock;
	}

	public Button getInsertButton() {
		return insertButton;
	}

	public Button getCancelButton() {
		return cancelButton;
	}

	
	
}
