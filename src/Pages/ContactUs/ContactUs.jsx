import { FaClock, FaPhoneAlt } from "react-icons/fa";
import ContactCard1 from "../../Components/ContactCard1/ContactCard1";
import Cover from "../../Components/Cover/Cover";
import TitleSection from "../../Components/TitleSection/TitleSection";
import img from "../../assets/contact.jpg"
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "../../Components/ContactForm/ContactForm";
const ContactUs = () => {
    return (
        <div>
            <Cover coverImg={img} title={"contact us"} details={"Try a new Dish"}></Cover>

            <TitleSection heading={"Visit Us"} subHeading={"OUR location"}></TitleSection>

            <div className="grid grid-cols-3 gap-6 my-6 w-11/12 mx-auto">
                <ContactCard1 icon={<FaPhoneAlt></FaPhoneAlt>} name={"PHONE"} work={"01348719487"}></ContactCard1>
                <ContactCard1 icon={<IoLocationSharp></IoLocationSharp>} name={"ADDRESS"} work={"Subid Bazar, Sylhet"}></ContactCard1>
                <ContactCard1 icon={<FaClock></FaClock>} name={"WORKING HOURS"} work={"10am-8pm"}></ContactCard1>
            </div>
            <TitleSection heading={"Send us a message"} subHeading={"contact form"}></TitleSection>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;