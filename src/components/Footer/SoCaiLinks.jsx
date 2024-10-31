import { socialLinks } from "../../constants";

const SoCaiLinks = () => {
  return (
    <div className="flex justify-center gap-3">
      {socialLinks.map((socail, index) => (
        <a href={socail.href} key={index} className="text-slate-600
        dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-100
        ">
          {socail.icon}
        </a>
      ))}
    </div>
  );
};

export default SoCaiLinks;
