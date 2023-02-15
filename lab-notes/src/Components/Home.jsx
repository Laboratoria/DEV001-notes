import HomeItems from "./HomeItems";


function Home() {
    return (
        <><header className="Home-header">Daily notes</header><section className="Home-section">
            <ul className="Home-welcome">
                <h4 className="Home-msnwelcome">
                    Bienvenida! a Daily notes <br></br>
                    Aquí podrás llevar un control de todas las actividades del día a día.<br></br>
                    </h4>
                <HomeItems
                    text={'Continuar con Email'}
                    link='/Login'
                />
                <HomeItems
                    text={'Continuar con Google'}
                    link='/google'
                />
            </ul>
            <h4 className= "Home-msnwelcome" > Si aún no te has registrado, dale click aquí:</h4>
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