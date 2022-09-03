import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

type Data = {
  name: string;
  address: string;
  phone: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: faker.name.fullName(),
    address: faker.address.secondaryAddress(),
    phone: faker.phone.number()
  });
}
