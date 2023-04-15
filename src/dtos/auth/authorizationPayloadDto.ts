import { vendorSignaturePayloadDto } from "../index";

import { customerSignaturePayloadDto } from "../customer/customerSignaturePayloadDto";

// TODO => later this dto will be  = vendorSignaturePayloadDto | userSignaturePayload | ....
export type AuthorizationPayloadDto = vendorSignaturePayloadDto | customerSignaturePayloadDto;  
