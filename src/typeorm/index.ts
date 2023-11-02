import { Customer } from "./customer.entity";
import { User } from "./user.entity";
import { Usuario } from "./usuario.entity";
import { Plan } from "./plan.entity";
import { Analisis } from "./analisis.entity";
import { Monitoreo } from "./monitoreo.entity";
import { Resultado } from "./resultado.entity";
import { Proveedor } from "./proveedor.entity";
import { AreaInteres } from "./area_interes.entity";

const entities = [User, Customer, Usuario, Plan, Analisis, Monitoreo, Resultado, Proveedor, AreaInteres];

export {User, Customer, Usuario, Plan, Analisis, Monitoreo, Resultado, Proveedor, AreaInteres};
export default entities;