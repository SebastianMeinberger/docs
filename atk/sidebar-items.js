initSidebarItems({"constant":[["NONE_ACTION",""],["NONE_COMPONENT",""],["NONE_DOCUMENT",""],["NONE_EDITABLE_TEXT",""],["NONE_GOBJECT_ACCESSIBLE",""],["NONE_HYPERLINK",""],["NONE_HYPERLINK_IMPL",""],["NONE_HYPERTEXT",""],["NONE_IMAGE",""],["NONE_MISC",""],["NONE_NO_OP_OBJECT",""],["NONE_NO_OP_OBJECT_FACTORY",""],["NONE_OBJECT",""],["NONE_OBJECT_FACTORY",""],["NONE_PLUG",""],["NONE_REGISTRY",""],["NONE_RELATION",""],["NONE_RELATION_SET",""],["NONE_SELECTION",""],["NONE_SOCKET",""],["NONE_STATE_SET",""],["NONE_STREAMABLE_CONTENT",""],["NONE_TABLE",""],["NONE_TABLE_CELL",""],["NONE_TEXT",""],["NONE_UTIL",""],["NONE_VALUE",""],["NONE_WINDOW",""]],"enum":[["CoordType",""],["Layer",""],["RelationType",""],["Role",""],["ScrollType","Scrolling types."],["StateType",""],["TextAttribute",""],["TextBoundary",""],["TextClipType",""],["TextGranularity",""],["ValueType",""]],"mod":[["prelude","Traits intended for blanket imports."]],"struct":[["Action",""],["Attribute",""],["Component",""],["Document",""],["EditableText",""],["GObjectAccessible",""],["GObjectAccessibleClass",""],["Hyperlink",""],["HyperlinkClass",""],["HyperlinkImpl",""],["HyperlinkStateFlags",""],["Hypertext",""],["Image","The `Image` widget displays an image. Various kinds of object can be displayed as an image; most typically, you would load a `gdk_pixbuf::Pixbuf` (\"pixel buffer\") from a file, and then display that. There’s a convenience function to do this, `Image::new_from_file`, used as follows:"],["Misc","The `Misc` widget is an abstract widget which is not useful itself, but is used to derive subclasses which have alignment and padding attributes."],["MiscClass",""],["NoOpObject",""],["NoOpObjectClass",""],["NoOpObjectFactory",""],["NoOpObjectFactoryClass",""],["Object",""],["ObjectClass",""],["ObjectFactory",""],["ObjectFactoryClass",""],["Plug","Together with `Socket`, `Plug` provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. One process creates a `Socket` widget and passes the ID of that widget’s window to the other process, which then creates a `Plug` with that window ID. Any widgets contained in the `Plug` then will appear inside the first application’s window."],["PlugClass",""],["Range","`Range` is the common base class for widgets which visualize an adjustment, e.g `Scale` or `Scrollbar`."],["Rectangle",""],["Registry",""],["RegistryClass",""],["Relation",""],["RelationClass",""],["RelationSet",""],["RelationSetClass",""],["Selection",""],["Socket","Together with `Plug`, `Socket` provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. One process creates a `Socket` widget and passes that widget’s window ID to the other process, which then creates a `Plug` with that window ID. Any widgets contained in the `Plug` then will appear inside the first application’s window."],["SocketClass",""],["StateSet",""],["StateSetClass",""],["StreamableContent",""],["Table",""],["TableCell",""],["Text",""],["TextRange",""],["TextRectangle",""],["Util",""],["UtilClass",""],["Value",""],["Window","A `Window` is a toplevel window which can contain other widgets. Windows normally have decorations that are under the control of the windowing system and allow the user to manipulate the window (resize it, move it, close it,...)."]],"trait":[["AtkActionExt",""],["AtkImageExt",""],["AtkMiscExt",""],["AtkObjectExt",""],["AtkPlugExt",""],["AtkSocketExt",""],["AtkWindowExt",""],["ComponentExt",""],["DocumentExt",""],["EditableTextExt",""],["GObjectAccessibleExt",""],["HyperlinkExt",""],["HyperlinkImplExt",""],["HypertextExt",""],["ObjectFactoryExt",""],["RegistryExt",""],["RelationExt",""],["RelationSetExt",""],["SelectionExt",""],["StateSetExt",""],["StreamableContentExt",""],["TableCellExt",""],["TableExt",""],["TextExt",""],["ValueExt",""]],"type":[["AttributeSet",""],["State",""]]});