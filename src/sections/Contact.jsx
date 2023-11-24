import{ ContactCard } from "../components";
import { contacts } from "../constans";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-16 md:gap-y-8 pt-12 relative z-10">
      <h3
        className="
        font-normal 
        text-[14px] 
        tracking-widest
      "
      >
        | Kontakt
      </h3>
      <div className="w-full grid md:grid-cols-2 gap-10">
        {contacts.map((contact) =>
          <ContactCard key={contact.name} Icon={contact.icon} value={contact.value} name={contact.name} />
        )}
      </div>
    </section>
  )
};

export default Contact;