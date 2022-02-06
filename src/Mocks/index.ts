import { createServer, Model, Factory } from 'miragejs';
import { Person } from '../types/person';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    factories: {
      person: Factory.extend<Partial<Person>>({
        get firstName() {
          return 'firstName';
        },
        get lastName() {
          return 'lastName';
        },
        get name() {
          return 'name: firstName, lastName';
        },
        get streetAddress() {
          return 'address.streetAddress';
        },
        get cityStateZip() {
          return '{{address.city}}, {{address.stateAbbr}} {{address.zipCode}}';
        },
        get phone() {
          return 'phone.phoneNumber';
        },
        get username() {
          return 'internet.firstName, lastName';
        },
        get password() {
          return 'internet.password';
        },
        get email() {
          return 'internet.email.firstName, lastName';
        },
        get avatar() {
          return 'internet.avatar';
        },
      }),
    },

    models: {
      person: Model.extend<Partial<Person>>({}),
    },

    routes() {
      this.namespace = 'api';

      this.get('people');
    },

    seeds(server) {
      server.createList('person', 20);
    },
  });
}
