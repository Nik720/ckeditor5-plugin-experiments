import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Simpleboxui extends Plugin {
    init() {
        console.log("Simple box UI called");

        const editor = this.editor;
        const t = editor.t;

        editor.ui.componentFactory.add( 'simpleBox', locale => {
            const command = editor.commands.get( 'insertSimpleBox' );
            const buttonView = new ButtonView( locale );
            buttonView.set( {
                label: t( 'Simple Box' ),
                withText: true,
                tooltip: true
            } );
            buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );
            this.listenTo(buttonView, 'execute', () => {
                //editor.execute( 'insertSimpleBox' )
                openModel();
            });

            window.addEventListener('setDatatoCK', function(data){
                editor.model.change( writer => {
                    const imageElement = writer.createElement( 'image', {
                        src: data.detail
                    } );
                    // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                } );
            })
            
            return buttonView;
        } );
    }
}