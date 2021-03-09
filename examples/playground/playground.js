(function() {
    let h = Peno.createElement;
    Peno.render(
        h('div', null, h('span', {className: 'bar'}, 'This is span.')),
        document.getElementById('app')
    )
})();