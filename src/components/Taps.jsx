export default function Taps ({children, buttons, buttonsContainer = "menu"}) {
    const ButtonsContainer = buttonsContainer;
    return(
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}