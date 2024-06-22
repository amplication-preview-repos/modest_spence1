import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { HouseTitle } from "../house/HouseTitle";
import { RenterTitle } from "../renter/RenterTitle";

export const RentalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput source="house.id" reference="House" label="house">
          <SelectInput optionText={HouseTitle} />
        </ReferenceInput>
        <ReferenceInput source="renter.id" reference="Renter" label="renter">
          <SelectInput optionText={RenterTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
