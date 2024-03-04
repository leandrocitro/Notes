import { Container } from '/styles';

export function ButtonText({ title, ...rest }) {
    <Container
        type="button"
        {...rest}
    >
        {title}
    </Container>
};