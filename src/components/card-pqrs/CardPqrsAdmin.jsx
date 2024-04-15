import Card from "../../molecules/card/Card";

const CardPqrsAdmin = ({pqrs} ) => {

    let updatePqrs = "Sin actualización";

    if (pqrs.fechaActualiza !== undefined){
        updatePqrs = pqrs.fechaActualiza;
    }

    let requestType = pqrs.tipoSolicitud;

    let renderRequestType;
    switch (requestType) {
        case "P":
            renderRequestType = "Petición";
            break;
        case "Q":
            renderRequestType = "Queja";
            break;
        case "R":
            renderRequestType = "Reclamo";
            break;
        case "S":
            renderRequestType = "Sugerencia";
            break;
        default:
            renderRequestType = "Petición";
    }

    return (
        <Card margin={"0"}>
            <h1 className={"card-pqrs-title"}>Tipo Solicitud:</h1>
            <p className={"card-pqrs-text"}>{renderRequestType}</p>
            <h1 className={"card-pqrs-title"}>Descripción:</h1>
            <p className={"card-pqrs-text"}>{pqrs.descripcionSolicitud}</p>
            <h1 className={"card-pqrs-title"}>Cliente:</h1>
            <p className={"card-pqrs-text"}>{pqrs.correoElectronico}</p>
            <h1 className={"card-pqrs-title"}>Incidencia:</h1>
            <p className={"card-pqrs-text"}>{pqrs.incidencia}</p>
            <h1 className={"card-pqrs-title"}>Fecha Registro:</h1>
            <p className={"card-pqrs-text"}>{pqrs.fechaRegistro}</p>
            <h1 className={"card-pqrs-title"}>Fecha Actulización</h1>
            <p className={"card-pqrs-text"}>{updatePqrs}</p>
            <h1 className={"card-pqrs-title"}>Id:</h1>
            <p className={"card-pqrs-text"}>{pqrs.id}</p>
            <button>Resolver</button>
        </Card>
    );
}

export default CardPqrsAdmin;