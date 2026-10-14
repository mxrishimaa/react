import logo from './assets/logo192.png'

export function Body() {
    return(
        <body>
            <div className="corpo">
                <h3>Atividade de React</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus optio at molestias nihil ullam molestiae asperiores, veritatis nobis quod ratione quaerat debitis sed reiciendis reprehenderit rerum! Eos, placeat illo!</p>
                <img src={logo} alt="Logo"/>
            </div>
        </body>
    );
}