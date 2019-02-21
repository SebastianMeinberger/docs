initSidebarItems({"constant":[["NONE_ACTION",""],["NONE_ACTION_GROUP",""],["NONE_ACTION_MAP",""],["NONE_APPLICATION",""],["NONE_APPLICATION_COMMAND_LINE",""],["NONE_APP_INFO",""],["NONE_APP_LAUNCH_CONTEXT",""],["NONE_BUFFERED_INPUT_STREAM",""],["NONE_BUFFERED_OUTPUT_STREAM",""],["NONE_CANCELLABLE",""],["NONE_CHARSET_CONVERTER",""],["NONE_CONVERTER",""],["NONE_CONVERTER_INPUT_STREAM",""],["NONE_CONVERTER_OUTPUT_STREAM",""],["NONE_CREDENTIALS",""],["NONE_DATA_INPUT_STREAM",""],["NONE_DATA_OUTPUT_STREAM",""],["NONE_DESKTOP_APP_INFO",""],["NONE_DRIVE",""],["NONE_EMBLEM",""],["NONE_EMBLEMED_ICON",""],["NONE_FILE",""],["NONE_FILENAME_COMPLETER",""],["NONE_FILE_ICON",""],["NONE_FILE_INFO",""],["NONE_FILE_INPUT_STREAM",""],["NONE_FILE_IO_STREAM",""],["NONE_FILE_MONITOR",""],["NONE_FILE_OUTPUT_STREAM",""],["NONE_FILTER_INPUT_STREAM",""],["NONE_FILTER_OUTPUT_STREAM",""],["NONE_ICON",""],["NONE_INET_ADDRESS",""],["NONE_INET_ADDRESS_MASK",""],["NONE_INET_SOCKET_ADDRESS",""],["NONE_INPUT_STREAM",""],["NONE_IO_STREAM",""],["NONE_LIST_MODEL",""],["NONE_LIST_STORE",""],["NONE_LOADABLE_ICON",""],["NONE_MEMORY_INPUT_STREAM",""],["NONE_MEMORY_OUTPUT_STREAM",""],["NONE_MENU_ATTRIBUTE_ITER",""],["NONE_MENU_LINK_ITER",""],["NONE_MENU_MODEL",""],["NONE_MOUNT",""],["NONE_MOUNT_OPERATION",""],["NONE_NETWORK_ADDRESS",""],["NONE_NETWORK_MONITOR",""],["NONE_NETWORK_SERVICE",""],["NONE_OUTPUT_STREAM",""],["NONE_PERMISSION",""],["NONE_POLLABLE_INPUT_STREAM",""],["NONE_POLLABLE_OUTPUT_STREAM",""],["NONE_PROXY",""],["NONE_PROXY_ADDRESS",""],["NONE_PROXY_RESOLVER",""],["NONE_REMOTE_ACTION_GROUP",""],["NONE_RESOLVER",""],["NONE_SEEKABLE",""],["NONE_SETTINGS",""],["NONE_SETTINGS_BACKEND",""],["NONE_SIMPLE_ACTION_GROUP",""],["NONE_SOCKET",""],["NONE_SOCKET_ADDRESS",""],["NONE_SOCKET_ADDRESS_ENUMERATOR",""],["NONE_SOCKET_CLIENT",""],["NONE_SOCKET_CONNECTABLE",""],["NONE_SOCKET_CONNECTION",""],["NONE_SOCKET_LISTENER",""],["NONE_SOCKET_SERVICE",""],["NONE_TCP_CONNECTION",""],["NONE_THEMED_ICON",""],["NONE_THREADED_SOCKET_SERVICE",""],["NONE_TLS_CERTIFICATE",""],["NONE_TLS_CLIENT_CONNECTION",""],["NONE_TLS_CONNECTION",""],["NONE_TLS_DATABASE",""],["NONE_TLS_FILE_DATABASE",""],["NONE_TLS_INTERACTION",""],["NONE_TLS_PASSWORD",""],["NONE_TLS_SERVER_CONNECTION",""],["NONE_UNIX_SOCKET_ADDRESS",""],["NONE_VFS",""],["NONE_VOLUME",""],["NONE_VOLUME_MONITOR",""],["NONE_ZLIB_COMPRESSOR",""],["NONE_ZLIB_DECOMPRESSOR",""]],"enum":[["ConverterResult",""],["CredentialsType",""],["DataStreamByteOrder",""],["DataStreamNewlineType",""],["DriveStartStopType",""],["EmblemOrigin",""],["FileMonitorEvent",""],["FileType","Indicates the file's on-disk type."],["IOErrorEnum",""],["MountOperationResult",""],["NetworkConnectivity",""],["NotificationPriority","Priority levels for `GNotifications`."],["PasswordSave",""],["ResolverRecordType",""],["ResourceError","An error code used with `G_RESOURCE_ERROR` in a `glib::Error` returned from a `Resource` routine."],["SocketClientEvent",""],["SocketFamily",""],["SocketListenerEvent",""],["SocketProtocol",""],["SocketType",""],["TlsAuthenticationMode",""],["TlsCertificateRequestFlags",""],["TlsDatabaseLookupFlags",""],["TlsInteractionResult",""],["TlsRehandshakeMode",""],["UnixSocketAddressType",""],["ZlibCompressorFormat",""]],"fn":[["bus_unown_name",""],["bus_unwatch_name",""],["content_type_can_be_executable",""],["content_type_equals",""],["content_type_from_mime_type",""],["content_type_get_description",""],["content_type_get_generic_icon_name",""],["content_type_get_icon",""],["content_type_get_mime_type",""],["content_type_get_symbolic_icon",""],["content_type_guess",""],["content_type_guess_for_tree",""],["content_type_is_a",""],["content_type_is_mime_type",""],["content_type_is_unknown",""],["content_types_get_registered",""],["dbus_address_escape_value",""],["dbus_address_get_stream",""],["dbus_address_get_stream_future",""],["dbus_address_get_stream_sync",""],["dbus_generate_guid",""],["dbus_is_address",""],["dbus_is_guid",""],["dbus_is_interface_name",""],["dbus_is_member_name",""],["dbus_is_name",""],["dbus_is_supported_address",""],["dbus_is_unique_name",""],["io_error_from_errno",""],["io_modules_scan_all_in_directory",""],["io_scheduler_cancel_all_jobs",""],["keyfile_settings_backend_new",""],["memory_settings_backend_new",""],["networking_init",""],["null_settings_backend_new",""],["resources_enumerate_children",""],["resources_get_info",""],["resources_lookup_data",""],["resources_open_stream",""],["resources_register",""],["resources_unregister",""],["unix_is_mount_path_system_internal",""],["unix_is_system_device_path",""],["unix_is_system_fs_type",""],["unix_mount_points_changed_since",""],["unix_mounts_changed_since",""]],"mod":[["functions",""],["prelude","Traits and essential types intended for blanket imports."],["signal",""]],"struct":[["Action","`Action` represents a single named action."],["ActionGroup","`ActionGroup` represents a group of actions. Actions can be used to expose functionality in a structured way, either from one part of a program to another, or to the outside world. Action groups are often used together with a `MenuModel` that provides additional representation data for displaying the actions to the user, e.g. in a menu."],["ActionMap","The GActionMap interface is implemented by `ActionGroup` implementations that operate by containing a number of named `Action` instances, such as `SimpleActionGroup`."],["AppInfo","`AppInfo` and `AppLaunchContext` are used for describing and launching applications installed on the system."],["AppInfoCreateFlags",""],["AppInfoMonitor",""],["AppInfoMonitorClass",""],["AppLaunchContext","Integrating the launch with the launching application. This is used to handle for instance startup notification and launching the new application on the same screen as the launching window."],["AppLaunchContextClass",""],["Application","A `Application` is the foundation of an application. It wraps some low-level platform-specific services and is intended to act as the foundation for higher-level application classes such as `GtkApplication` or `MxApplication`. In general, you should not use this class outside of a higher level framework."],["ApplicationClass",""],["ApplicationCommandLine",""],["ApplicationCommandLineClass",""],["ApplicationFlags",""],["AskPasswordFlags",""],["BufferedInputStream",""],["BufferedInputStreamClass",""],["BufferedOutputStream",""],["BufferedOutputStreamClass",""],["BytesIcon",""],["BytesIconClass",""],["Cancellable","GCancellable is a thread-safe operation cancellation stack used throughout GIO to allow for cancellation of synchronous and asynchronous operations."],["CancellableClass",""],["CharsetConverter",""],["CharsetConverterClass",""],["Converter",""],["ConverterFlags",""],["ConverterInputStream",""],["ConverterInputStreamClass",""],["ConverterOutputStream",""],["ConverterOutputStreamClass",""],["Credentials",""],["CredentialsClass",""],["DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME",""],["DRIVE_IDENTIFIER_KIND_UNIX_DEVICE",""],["DataInputStream",""],["DataInputStreamClass",""],["DataOutputStream",""],["DataOutputStreamClass",""],["DesktopAppInfo",""],["DesktopAppInfoClass",""],["Drive",""],["DriveStartFlags",""],["Emblem",""],["EmblemClass",""],["EmblemedIcon",""],["EmblemedIconClass",""],["Error","A generic error capable of representing various error domains (types)."],["FILE_ATTRIBUTE_ACCESS_CAN_DELETE",""],["FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE",""],["FILE_ATTRIBUTE_ACCESS_CAN_READ",""],["FILE_ATTRIBUTE_ACCESS_CAN_RENAME",""],["FILE_ATTRIBUTE_ACCESS_CAN_TRASH",""],["FILE_ATTRIBUTE_ACCESS_CAN_WRITE",""],["FILE_ATTRIBUTE_DOS_IS_ARCHIVE",""],["FILE_ATTRIBUTE_DOS_IS_SYSTEM",""],["FILE_ATTRIBUTE_ETAG_VALUE",""],["FILE_ATTRIBUTE_FILESYSTEM_FREE",""],["FILE_ATTRIBUTE_FILESYSTEM_READONLY",""],["FILE_ATTRIBUTE_FILESYSTEM_REMOTE",""],["FILE_ATTRIBUTE_FILESYSTEM_SIZE",""],["FILE_ATTRIBUTE_FILESYSTEM_TYPE",""],["FILE_ATTRIBUTE_FILESYSTEM_USED",""],["FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW",""],["FILE_ATTRIBUTE_GVFS_BACKEND",""],["FILE_ATTRIBUTE_ID_FILE",""],["FILE_ATTRIBUTE_ID_FILESYSTEM",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_START",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP",""],["FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT",""],["FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI",""],["FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC",""],["FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE",""],["FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE",""],["FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE",""],["FILE_ATTRIBUTE_OWNER_GROUP",""],["FILE_ATTRIBUTE_OWNER_USER",""],["FILE_ATTRIBUTE_OWNER_USER_REAL",""],["FILE_ATTRIBUTE_PREVIEW_ICON",""],["FILE_ATTRIBUTE_RECENT_MODIFIED",""],["FILE_ATTRIBUTE_SELINUX_CONTEXT",""],["FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE",""],["FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE",""],["FILE_ATTRIBUTE_STANDARD_COPY_NAME",""],["FILE_ATTRIBUTE_STANDARD_DESCRIPTION",""],["FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME",""],["FILE_ATTRIBUTE_STANDARD_EDIT_NAME",""],["FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE",""],["FILE_ATTRIBUTE_STANDARD_ICON",""],["FILE_ATTRIBUTE_STANDARD_IS_BACKUP",""],["FILE_ATTRIBUTE_STANDARD_IS_HIDDEN",""],["FILE_ATTRIBUTE_STANDARD_IS_SYMLINK",""],["FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL",""],["FILE_ATTRIBUTE_STANDARD_IS_VOLATILE",""],["FILE_ATTRIBUTE_STANDARD_NAME",""],["FILE_ATTRIBUTE_STANDARD_SIZE",""],["FILE_ATTRIBUTE_STANDARD_SORT_ORDER",""],["FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON",""],["FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET",""],["FILE_ATTRIBUTE_STANDARD_TARGET_URI",""],["FILE_ATTRIBUTE_STANDARD_TYPE",""],["FILE_ATTRIBUTE_THUMBNAILING_FAILED",""],["FILE_ATTRIBUTE_THUMBNAIL_IS_VALID",""],["FILE_ATTRIBUTE_THUMBNAIL_PATH",""],["FILE_ATTRIBUTE_TIME_ACCESS",""],["FILE_ATTRIBUTE_TIME_ACCESS_USEC",""],["FILE_ATTRIBUTE_TIME_CHANGED",""],["FILE_ATTRIBUTE_TIME_CHANGED_USEC",""],["FILE_ATTRIBUTE_TIME_CREATED",""],["FILE_ATTRIBUTE_TIME_CREATED_USEC",""],["FILE_ATTRIBUTE_TIME_MODIFIED",""],["FILE_ATTRIBUTE_TIME_MODIFIED_USEC",""],["FILE_ATTRIBUTE_TRASH_DELETION_DATE",""],["FILE_ATTRIBUTE_TRASH_ITEM_COUNT",""],["FILE_ATTRIBUTE_TRASH_ORIG_PATH",""],["FILE_ATTRIBUTE_UNIX_BLOCKS",""],["FILE_ATTRIBUTE_UNIX_BLOCK_SIZE",""],["FILE_ATTRIBUTE_UNIX_DEVICE",""],["FILE_ATTRIBUTE_UNIX_GID",""],["FILE_ATTRIBUTE_UNIX_INODE",""],["FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT",""],["FILE_ATTRIBUTE_UNIX_MODE",""],["FILE_ATTRIBUTE_UNIX_NLINK",""],["FILE_ATTRIBUTE_UNIX_RDEV",""],["FILE_ATTRIBUTE_UNIX_UID",""],["File","`File` is a high level abstraction for manipulating files on a virtual file system. `GFiles` are lightweight, immutable objects that do no I/O upon creation. It is necessary to understand that `File` objects do not represent files, merely an identifier for a file. All file content I/O is implemented as streaming operations (see `InputStream` and `OutputStream`)."],["FileCreateFlags",""],["FileIOStream",""],["FileIOStreamClass",""],["FileIcon",""],["FileIconClass",""],["FileInfo","Functionality for manipulating basic metadata for files. `FileInfo` implements methods for getting information that all files should contain, and allows for manipulation of extended attributes."],["FileInfoClass",""],["FileInputStream",""],["FileInputStreamClass",""],["FileMonitor",""],["FileMonitorClass",""],["FileMonitorFlags",""],["FileOutputStream",""],["FileOutputStreamClass",""],["FileQueryInfoFlags",""],["FilenameCompleter",""],["FilenameCompleterClass",""],["FilterInputStream",""],["FilterInputStreamClass",""],["FilterOutputStream",""],["FilterOutputStreamClass",""],["GioFuture",""],["IOStream",""],["IOStreamClass",""],["IOStreamSpliceFlags",""],["Icon","`Icon` is a very minimal interface for icons. It provides functions for checking the equality of two icons, hashing of icons and serializing an icon to and from strings."],["InetAddress",""],["InetAddressClass",""],["InetAddressMask",""],["InetAddressMaskClass",""],["InetSocketAddress",""],["InetSocketAddressClass",""],["InputStream",""],["InputStreamClass",""],["ListModel",""],["ListStore",""],["ListStoreClass",""],["LoadableIcon",""],["MENU_ATTRIBUTE_ACTION",""],["MENU_ATTRIBUTE_ACTION_NAMESPACE",""],["MENU_ATTRIBUTE_ICON",""],["MENU_ATTRIBUTE_LABEL",""],["MENU_ATTRIBUTE_TARGET",""],["MENU_LINK_SECTION",""],["MENU_LINK_SUBMENU",""],["MemoryInputStream",""],["MemoryInputStreamClass",""],["MemoryOutputStream",""],["MemoryOutputStreamClass",""],["Menu","`Menu` is a simple implementation of `MenuModel`. You populate a `Menu` by adding `MenuItem` instances to it."],["MenuAttributeIter","`MenuAttributeIter` is an opaque structure type. You must access it using the functions below."],["MenuAttributeIterClass",""],["MenuClass",""],["MenuItem","`MenuItem` is an opaque structure type. You must access it using the functions below."],["MenuItemClass",""],["MenuLinkIter","`MenuLinkIter` is an opaque structure type. You must access it using the functions below."],["MenuLinkIterClass",""],["MenuModel","`MenuModel` represents the contents of a menu -- an ordered list of menu items. The items are associated with actions, which can be activated through them. Items can be grouped in sections, and may have submenus associated with them. Both items and sections usually have some representation data, such as labels or icons. The type of the associated action (ie whether it is stateful, and what kind of state it has) can influence the representation of the item."],["MenuModelClass",""],["Mount",""],["MountMountFlags",""],["MountOperation",""],["MountOperationClass",""],["MountUnmountFlags",""],["NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME",""],["NETWORK_MONITOR_EXTENSION_POINT_NAME",""],["NetworkAddress",""],["NetworkAddressClass",""],["NetworkMonitor",""],["NetworkService",""],["NetworkServiceClass",""],["Notification","`Notification` is a mechanism for creating a notification to be shown to the user -- typically as a pop-up notification presented by the desktop environment shell."],["NotificationClass",""],["Object","The base class in the object hierarchy."],["OutputStream",""],["OutputStreamClass",""],["OutputStreamSpliceFlags",""],["PROXY_EXTENSION_POINT_NAME",""],["PROXY_RESOLVER_EXTENSION_POINT_NAME",""],["Permission","A `Permission` represents the status of the caller's permission to perform a certain action."],["PermissionClass",""],["PollableInputStream",""],["PollableOutputStream",""],["PropertyAction",""],["PropertyActionClass",""],["Proxy",""],["ProxyAddress",""],["ProxyAddressClass",""],["ProxyResolver",""],["RemoteActionGroup",""],["Resolver",""],["ResolverClass",""],["Resource","Applications and libraries often contain binary or textual data that is really part of the application, rather than user data. For instance `GtkBuilder` .ui files, splashscreen images, GMenu markup XML, CSS files, icons, etc. These are often shipped as files in `$datadir/appname`, or manually included as literal strings in the code."],["ResourceLookupFlags",""],["SETTINGS_BACKEND_EXTENSION_POINT_NAME",""],["Seekable",""],["Settings","The `Settings` class provides a convenient API for storing and retrieving application settings."],["SettingsBackend",""],["SettingsBackendClass",""],["SettingsBindFlags",""],["SettingsClass",""],["SettingsSchema","The `SettingsSchemaSource` and `SettingsSchema` APIs provide a mechanism for advanced control over the loading of schemas and a mechanism for introspecting their content."],["SettingsSchemaKey","`SettingsSchemaKey` is an opaque data structure and can only be accessed using the following functions."],["SettingsSchemaSource",""],["SimpleAction","A `SimpleAction` is the obvious simple implementation of the `Action` interface. This is the easiest way to create an action for purposes of adding it to a `SimpleActionGroup`."],["SimpleActionClass",""],["SimpleActionGroup","`SimpleActionGroup` is a hash table filled with `Action` objects, implementing the `ActionGroup` and `ActionMap` interfaces."],["SimpleActionGroupClass",""],["SimpleIOStream",""],["SimpleIOStreamClass",""],["SimplePermission","`SimplePermission` is a trivial implementation of `Permission` that represents a permission that is either always or never allowed. The value is given at construction and doesn't change."],["SimplePermissionClass",""],["Socket",""],["SocketAddress",""],["SocketAddressClass",""],["SocketAddressEnumerator",""],["SocketAddressEnumeratorClass",""],["SocketClass",""],["SocketClient",""],["SocketClientClass",""],["SocketConnectable",""],["SocketConnection",""],["SocketConnectionClass",""],["SocketListener",""],["SocketListenerClass",""],["SocketService",""],["SocketServiceClass",""],["SrvTarget",""],["Subprocess",""],["SubprocessClass",""],["SubprocessFlags",""],["SubprocessLauncher",""],["SubprocessLauncherClass",""],["TLS_BACKEND_EXTENSION_POINT_NAME",""],["TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT",""],["TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER",""],["TcpConnection",""],["TcpConnectionClass",""],["ThemedIcon","`ThemedIcon` is an implementation of `Icon` that supports icon themes. `ThemedIcon` contains a list of all of the icons present in an icon theme, so that icons can be looked up quickly. `ThemedIcon` does not provide actual pixmaps for icons, just the icon names. Ideally something like `gtk_icon_theme_choose_icon` should be used to resolve the list of names so that fallback icons work nicely with themes that inherit other themes."],["ThemedIconClass",""],["ThreadedSocketService",""],["ThreadedSocketServiceClass",""],["TlsCertificate","A certificate used for TLS authentication and encryption. This can represent either a certificate only (eg, the certificate received by a client from a server), or the combination of a certificate and a private key (which is needed when acting as a `TlsServerConnection`)."],["TlsCertificateClass",""],["TlsCertificateFlags",""],["TlsClientConnection",""],["TlsConnection",""],["TlsConnectionClass",""],["TlsDatabase",""],["TlsDatabaseClass",""],["TlsDatabaseVerifyFlags",""],["TlsFileDatabase",""],["TlsInteraction",""],["TlsInteractionClass",""],["TlsPassword",""],["TlsPasswordClass",""],["TlsPasswordFlags",""],["TlsServerConnection",""],["UnixSocketAddress",""],["UnixSocketAddressClass",""],["VFS_EXTENSION_POINT_NAME",""],["VOLUME_IDENTIFIER_KIND_CLASS",""],["VOLUME_IDENTIFIER_KIND_HAL_UDI",""],["VOLUME_IDENTIFIER_KIND_LABEL",""],["VOLUME_IDENTIFIER_KIND_NFS_MOUNT",""],["VOLUME_IDENTIFIER_KIND_UNIX_DEVICE",""],["VOLUME_IDENTIFIER_KIND_UUID",""],["VOLUME_MONITOR_EXTENSION_POINT_NAME",""],["Vfs",""],["VfsClass",""],["Volume",""],["VolumeMonitor",""],["VolumeMonitorClass",""],["ZlibCompressor",""],["ZlibCompressorClass",""],["ZlibDecompressor",""],["ZlibDecompressorClass",""]],"trait":[["ActionExt","Trait containing all `Action` methods."],["ActionGroupExt","Trait containing all `ActionGroup` methods."],["ActionMapExt","Trait containing all `ActionMap` methods."],["AppInfoExt","Trait containing all `AppInfo` methods."],["AppLaunchContextExt","Trait containing all `AppLaunchContext` methods."],["ApplicationCommandLineExt",""],["ApplicationExt","Trait containing all `Application` methods."],["BufferedInputStreamExt",""],["BufferedOutputStreamExt",""],["CancellableExt","Trait containing all `Cancellable` methods."],["CharsetConverterExt",""],["ConverterExt",""],["ConverterInputStreamExt",""],["ConverterOutputStreamExt",""],["CredentialsExt",""],["DataInputStreamExt",""],["DataOutputStreamExt",""],["DesktopAppInfoExt",""],["DriveExt",""],["EmblemExt",""],["EmblemedIconExt",""],["FileExt","Trait containing all `File` methods."],["FileIOStreamExt",""],["FileIconExt",""],["FileInfoExt","Trait containing all `FileInfo` methods."],["FileInputStreamExt",""],["FileMonitorExt",""],["FileOutputStreamExt",""],["FilenameCompleterExt",""],["FilterInputStreamExt",""],["FilterOutputStreamExt",""],["IOStreamExt",""],["IconExt","Trait containing all `Icon` methods."],["InetAddressExt",""],["InetAddressMaskExt",""],["InetSocketAddressExt",""],["InputStreamExt",""],["ListModelExt",""],["ListStoreExt",""],["LoadableIconExt",""],["MemoryInputStreamExt",""],["MemoryOutputStreamExt",""],["MenuAttributeIterExt","Trait containing all `MenuAttributeIter` methods."],["MenuLinkIterExt","Trait containing all `MenuLinkIter` methods."],["MenuModelExt","Trait containing all `MenuModel` methods."],["MountExt",""],["MountOperationExt",""],["NetworkAddressExt",""],["NetworkMonitorExt",""],["NetworkServiceExt",""],["OutputStreamExt",""],["PermissionExt","Trait containing all `Permission` methods."],["PollableInputStreamExt",""],["PollableOutputStreamExt",""],["ProxyAddressExt",""],["ProxyExt",""],["ProxyResolverExt",""],["RemoteActionGroupExt",""],["ResolverExt",""],["SeekableExt",""],["SettingsBackendExt",""],["SettingsExt","Trait containing all `Settings` methods."],["SocketAddressEnumeratorExt",""],["SocketAddressExt",""],["SocketClientExt",""],["SocketConnectableExt",""],["SocketConnectionExt",""],["SocketExt",""],["SocketListenerExt",""],["SocketServiceExt",""],["TcpConnectionExt",""],["ThemedIconExt","Trait containing all `ThemedIcon` methods."],["ThreadedSocketServiceExt",""],["TlsCertificateExt","Trait containing all `TlsCertificate` methods."],["TlsClientConnectionExt",""],["TlsConnectionExt",""],["TlsDatabaseExt",""],["TlsFileDatabaseExt",""],["TlsInteractionExt",""],["TlsPasswordExt",""],["TlsServerConnectionExt",""],["UnixSocketAddressExt",""],["VfsExt",""],["VolumeExt",""],["VolumeMonitorExt",""],["ZlibCompressorExt",""],["ZlibDecompressorExt",""]]});