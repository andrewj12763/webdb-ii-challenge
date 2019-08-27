exports.seed = function (knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
          {
            vin: 'JH4KB16595C012048',
            make: 'BMW',
            model: 'BMW',
            mileage: '300000',
            transmissionType: 'auto',
            status: 'new',
            created_at: knex.fn.now(),
          },
          {
            vin: '1G1AL15FX87311493',
            make: 'Toyota',
            model: 'Toyota Corolla',
            mileage: '350000',
            transmissionType: 'auto',
            status: 'used',
            created_at: knex.fn.now(),
          }
        ]);
      });
  };