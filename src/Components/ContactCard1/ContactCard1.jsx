const ContactCard1 = ({icon,name, work}) => {
  return (
    <div className="border flex flex-col justify-center items-center">
      <div className="bg-green-600 w-full py-3">
      <button className="text-2xl text-white flex justify-center items-center  mx-auto">{icon}</button>
      </div>
      <div className="bg-slate-100 w-full space-y-2 py-8">
        <h4 className="text-gray-600 text-3xl text-center">{name}</h4>
        <p className="text-gray-600 font-semibold text-lg text-center">{work}</p>
      </div>
    </div>
  );
};

export default ContactCard1;
