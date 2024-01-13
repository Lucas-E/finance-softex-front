import { CustomerTableData } from "../../interfaces/tableData";
import { faker } from '@faker-js/faker';

export function generateFakeData(count: number): CustomerTableData[] {
    const fakeData: CustomerTableData[] = [];

    for (let i = 0; i < count; i++) {
        const data: CustomerTableData = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
        };

        fakeData.push(data);
    }

    return fakeData;
}