class SpriteAnimation extends HTMLElement{
    width
    height
    frames
    duration
    rows
    sprite
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        const styleTag = document.createElement('style')
        styleTag.innerText = this.style()
        this.shadowRoot.appendChild(styleTag)
        const elem = document.createElement('div')
        elem.classList.add('animation')
        this.shadowRoot.appendChild(elem)
    }

    style(){
        return `
        .animation {
            width: var(--width);
            height: var(--height);
            background:var(--sprite);
            background-size: calc(var(--width) * var(--frames)) calc(var(--height) * var(--rows));
            animation: spriteAnimation var(--duration) steps(var(--frames)) infinite;
            background-position-y: calc(var(--height) * var(--activeRow)*-1);
        }
        
        @keyframes spriteAnimation {
            from{
                background-position-x: 0;
            }
            to{
                background-position-x: calc((var(--width)*var(--frames))*-1);
            }
        }
        `
    }
    set width(w){
        this.style.setProperty('--width', `${w}px`)
    }
    set height(h){
        this.style.setProperty('--height', `${h}px`)
    }
    set frames(f){
        this.style.setProperty('--frames', f)
    }
    set duration(d){
        this.style.setProperty('--duration', `${d}s`)
    }
    set rows(r){
        this.style.setProperty('--rows', r)
    }
    set sprite(url){
        this.style.setProperty('--sprite', `url('${url}')`)
    }
}
customElements.define('gloop-animation', SpriteAnimation)