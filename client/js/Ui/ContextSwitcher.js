export default function ContextSwitcher(selector) {
    let $container = $(selector);

    this.render = (state) =>
        `<input type="checkbox" id="context"/>
         <span sc_addr="${window.scKeynodes['ui_user_command_with_context']}">С учетом контекста</span>`;

    this.setState = (newState) => {
        this.state = newState;
        $container.empty();
        $container.html(this.render);
        this._registerHandlers();
    };

    this._registerHandlers = () => {
        if (!this.onChange) return;
        let $context = $container.find("#context");
        let $noContext = $container.find("#no-context");
        let change = (event) => {
            let context = $context[0].checked;
            this.onChange({
                "context": context,
                "noContext": false
            });
        };
        $context.click(change);
    };

    this.onCheckboxChange = (callback) => {
        this.onChange = callback;
        this._registerHandlers();
    };

    this.setState({});

}
