import "../styles/Footer.css";
import { dataFooter } from "../FooterDB";

const Footer = () => {
  return (
    <div className="footer bg-dark text-white mt-5">
      <div className="container d-lg-flex justify-content-between align-items-between p-5">
        {dataFooter.map((datumFooter) => {
          const { id, title, contact, about, careers, blog } = datumFooter;
          return (
            <div key={id} className="">
              <h2>{title}</h2>
              <ul className="list-unstyled lh-lg">
                <li>
                  <a className="text-decoration-none text-white" href="#">{contact}</a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="#">{about}</a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="#">{careers}</a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="#">{blog}</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <p className="container text-center m-auto">
        Copyright &copy; 2022 Abimbola{" "}
      </p>
    </div>
  );
};

export default Footer;
