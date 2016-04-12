import {Injectable} from 'angular2/core';

import {MANUFACTURERS} from '../mocks/mock-manufacturers';

@Injectable()
export class ManufacturerService {
    getManufacturer(id:number) {
        return Promise.resolve(MANUFACTURERS).then(
                manufacturers => manufacturers.filter(manufacturer => manufacturer.id === id)[0]
        );
    }

    getManufacturers() {
        return Promise.resolve(MANUFACTURERS);
    }
}