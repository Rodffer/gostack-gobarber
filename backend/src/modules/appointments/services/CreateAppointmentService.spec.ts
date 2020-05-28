import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRespository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '001',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('001');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 5, 10, 16);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '001',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '001',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
