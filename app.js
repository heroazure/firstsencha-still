//Ext.application({
//    name: 'myapp',
//    icon: 'images/icon.png',
//    glossOnIcon: false,
//    phoneStartupScreen: 'images/phone_startup.png',
//    tabletStartupScreen: 'images/tablet_startup.png',
//    launch: function () {
//        var panel = Ext.create('Ext.Panel', {
//            fullscreen: true,
//            id: 'mypanel',
//            style: 'color:red',
//            html: 'һ���򵥵�ʾ�����'
//        })
//    }
//});


Ext.application({
    name: 'myapp',
    icon: 'images/icon.png',
    glossOnIcon: false,
    phoneStartupScreen: 'images/phone_startup.png',
    tabletStartupScreen: 'images/tablet_startup.png',
    launch: function () {
        var panel = Ext.create('Ext.Panel', {
            //fullscreen: true,
            id: 'mypanel',

            html: 'һ���򵥵�ʾ�����'
        });
        var subpanel = Ext.create('Ext.Panel', {
            id: 'subpanel',
            html: '�����'
        });
        Ext.Viewport.add(panel);
        Ext.ComponentManager.get('mypanel').add(subpanel);//.addCls('classred')
    }
});