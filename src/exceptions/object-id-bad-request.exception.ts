import {BadRequestException} from '@nestjs/common';
import {OBJECT_ID_BAD_REQUEST_EXCEPTION_MSG} from './constants/object-id-bad-request-exception.constants';

export class ObjectIdBadRequestException extends BadRequestException {
  constructor() {
    super(OBJECT_ID_BAD_REQUEST_EXCEPTION_MSG);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ObjectIdBadRequestException.prototype);
  }
}
