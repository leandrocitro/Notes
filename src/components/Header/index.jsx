import { Container, Profile } from "./styles";


export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/leandrocitro.png"
                alt="foto do usuário" 
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Leandro Citro</strong>
                </div>
            </Profile>

        </Container>
            
        
    )
    
}