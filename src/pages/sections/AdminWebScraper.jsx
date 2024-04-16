import AdminMenu from "../../components/admin-menu/AdminMenu";
import { validateRoleFromToken } from "../../utilities/jwt-utilities.js";

const AdminWebScraper = () => {
<<<<<<< Updated upstream

    validateRoleFromToken("ADMIN");

    return (
        <>
            <AdminMenu />
            <h1>Web Scraper</h1>
        </>
    );
}
=======
  validateRoleFromToken("ADMIN");
  validateExpirationToken();

  const [ktronixPhones, setKtronixPhones] = useState(false);
  const [ktronixComputers, setKtronixComputers] = useState(false);
  const [ktronixMonitors, setKtronixMonitors] = useState(false);
  const [ktronixTablets, setKtronixTablets] = useState(false);

  const [falabellaPhones, setFalabellaPhones] = useState(false);
  const [falabellaComputers, setFalabellaComputers] = useState(false);
  const [falabellaMonitors, setFalabellaMonitors] = useState(false);
  const [falabellaTablets, setFalabellaTablets] = useState(false);

  const [exitoPhones, setExitoPhones] = useState(false);
  const [exitoComputers, setExitoComputers] = useState(false);
  const [exitoMonitors, setExitoMonitors] = useState(false);
  const [exitoTablets, setExitoTablets] = useState(false);

  const [mercadoLibrePhones, setMercadoLibrePhones] = useState(false);
  const [mercadoLibreComputers, setMercadoLibreComputers] = useState(false);
  const [mercadoLibreMonitors, setMercadoLibreMonitors] = useState(false);
  const [mercadoLibreTablets, setMercadoLibreTablets] = useState(false);

  const [webScraperInitiate, setWebScraperInitiate] = useState(false);

  const handleWebScraper = async (e) => {
    e.preventDefault();

    try {
      const pResponse = await fetch(
        `http://ec2-54-158-4-132.compute-1.amazonaws.com:8080/umb/v1/product/web-scraper-bot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            ktronixPhones: ktronixPhones,
            falabellaPhones: falabellaPhones,
            exitoPhones: exitoPhones,
            mercadoLibrePhones: mercadoLibrePhones,
            ktronixComputers: ktronixComputers,
            falabellaComputers: falabellaComputers,
            exitoComputers: exitoComputers,
            mercadoLibreComputers: mercadoLibreComputers,
            ktronixMonitors: ktronixMonitors,
            falabellaMonitors: falabellaMonitors,
            exitoMonitors: exitoMonitors,
            mercadoLibreMonitors: mercadoLibreMonitors,
            ktronixTablets: ktronixTablets,
            falabellaTablets: falabellaTablets,
            exitoTablets: exitoTablets,
            mercadoLibreTablets: mercadoLibreTablets,
          }),
        }
      );

      if (!pResponse.ok) {
        alert("Hubo un error al recuperar los datos");
        return;
      }
      setTimeout(setWebScraperInitiate(true), 5000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <AdminMenu />
      {!webScraperInitiate ? (
        <form className="scraper-form" onSubmit={handleWebScraper}>
          <div className="wrapper-scraper">
            <div className="wrapper-categories-scraper-container">
              <h1 className="platform-scraper-title">Ktronix</h1>
              <div className="categories-scraper-container">
                <label>
                  <input
                    type="checkbox"
                    checked={ktronixPhones}
                    onChange={(e) => setKtronixPhones(!ktronixPhones)}
                  />
                  Celulares
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={ktronixComputers}
                    onChange={(e) => setKtronixComputers(!ktronixComputers)}
                  />
                  Computadores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={ktronixMonitors}
                    onChange={(e) => setKtronixMonitors(!ktronixMonitors)}
                  />
                  Monitores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={ktronixTablets}
                    onChange={(e) => setKtronixTablets(!ktronixTablets)}
                  />
                  Tablets
                </label>
              </div>
            </div>
            <div className="wrapper-categories-scraper-container">
              <h1 className="platform-scraper-title">Falabella</h1>
              <div className="categories-scraper-container">
                <label>
                  <input
                    type="checkbox"
                    checked={falabellaPhones}
                    onChange={(e) => setFalabellaPhones(!falabellaPhones)}
                  />
                  Celulares
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={falabellaComputers}
                    onChange={(e) => setFalabellaComputers(!falabellaComputers)}
                  />
                  Computadores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={falabellaMonitors}
                    onChange={(e) => setFalabellaMonitors(!falabellaMonitors)}
                  />
                  Monitores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={falabellaTablets}
                    onChange={(e) => setFalabellaTablets(!falabellaTablets)}
                  />
                  Tablets
                </label>
              </div>
            </div>
            <div className="wrapper-categories-scraper-container">
              <h1 className="platform-scraper-title">Exito</h1>
              <div className="categories-scraper-container">
                <label>
                  <input
                    type="checkbox"
                    checked={exitoPhones}
                    onChange={(e) => setExitoPhones(!exitoPhones)}
                  />
                  Celulares
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={exitoComputers}
                    onChange={(e) => setExitoComputers(!exitoComputers)}
                  />
                  Computadores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={exitoMonitors}
                    onChange={(e) => setExitoMonitors(!exitoMonitors)}
                  />
                  Monitores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={exitoTablets}
                    onChange={(e) => setExitoTablets(!exitoTablets)}
                  />
                  Tablets
                </label>
              </div>
            </div>
            <div className="wrapper-categories-scraper-container">
              <h1 className="platform-scraper-title">Mercado Libre</h1>
              <div className="categories-scraper-container">
                <label>
                  <input
                    type="checkbox"
                    checked={mercadoLibrePhones}
                    onChange={(e) => setMercadoLibrePhones(!mercadoLibrePhones)}
                  />
                  Celulares
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={mercadoLibreComputers}
                    onChange={(e) =>
                      setMercadoLibreComputers(!mercadoLibreComputers)
                    }
                  />
                  Computadores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={mercadoLibreMonitors}
                    onChange={(e) =>
                      setMercadoLibreMonitors(!mercadoLibreMonitors)
                    }
                  />
                  Monitores
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={mercadoLibreTablets}
                    onChange={(e) =>
                      setMercadoLibreTablets(!mercadoLibreTablets)
                    }
                  />
                  Tablets
                </label>
              </div>
            </div>
          </div>
          <Button
            text="Iniciar proceso"
            width={"200px"}
            margin={"20px 0px 0px 0px"}
          />
        </form>
      ) : (
        <div className="web-scraper-dialog-container">
          <img src={Check} alt="" className="mail-send-check-img" />
          <h1 className="title">Proceso iniciado</h1>
          <p className="forgot-password-text">
            Cuando el proceso finalice, recibirás un correo electrónico con el
            resultado de la búsqueda de productos en la web.
          </p>
        </div>
      )}
    </>
  );
};
>>>>>>> Stashed changes

export default AdminWebScraper;
