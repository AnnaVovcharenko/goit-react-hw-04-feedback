import { TitleSection } from './Section.styled';

const Section = ({title, children}) => {
    return(
        <section>
            <TitleSection>
                {title && <h2>{title}</h2>}
                {children}
            </TitleSection>
        </section>
    );
};
export default Section;