import { Customer } from "./customer.entity";
import { User } from "./user.entity";
import { Usuario } from "./usuario.entity";
import { Plan } from "./plan.entity";
import { Analisis } from "./analisis.entity";
import { Monitoreo } from "./monitoreo.entity";
import { Resultado } from "./resultado.entity";

const entities = [User, Customer, Usuario, Plan, Analisis, Monitoreo, Resultado];

export {User, Customer, Usuario, Plan, Analisis, Monitoreo, Resultado};
export default entities;