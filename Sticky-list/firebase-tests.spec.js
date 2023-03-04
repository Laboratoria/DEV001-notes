import { signInWithPopup } from "./__mocks__/@firebase/funciones-mockeadas";

it('Debe validar el usuario registrado desde google', () => {
    signInWithPopup.mockImplementation(() => Promise.resolve('persona01@gmail.com'));
    registroGoogle(signInWithPopup);

    expect(signInWithPopup).toBeCalled();
});