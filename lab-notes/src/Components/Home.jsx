import HomeItems from "./HomeItems";


function Home() {
    return (
        <><header className="App-header">DAILY NOTES</header><section className="App-section">
            <ul>
                <h4 className="App-bienvenida">
                    Bienvenida! en Daily notes podrás llevar un control de todas las actividades del día a día,<br></br>
                    si ya estas lista para organizar tu vida! Registrate, ingresa y comencemos!</h4>
                <HomeItems
                    text={'Continuar con Email'}
                    link='/Login'
                />
                <HomeItems
                    text={'Continuar con Google'}
                    link='/google'
                />
            </ul>
            <h4> Si aún no te has registrado, dale click aquí:</h4>
            <ul>
                <HomeItems
                    text={'Registrate'}
                    link='/Register'
                />
            </ul>
        </section></>
    )
};
export default Home;