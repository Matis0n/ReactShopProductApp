import {Container} from "reactstrap";

import  "../../../styles/common-section.scss";

const CommonSection = (props) => {
    return (
        <section className="common_section mt-5">
            <Container>
                <h2 className="text-white"> {props.title}</h2>
            </Container>
        </section>
    );

}
export default CommonSection;