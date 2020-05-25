import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findBydate(date: Date): Promise<Appointment | undefined>;
}
