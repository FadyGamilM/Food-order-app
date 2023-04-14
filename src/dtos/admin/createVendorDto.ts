type createVendorDto = {
   pinCode: string;
   brandName: string;
   ownerName: string;
   foodType: [string];
   email: string;
   password: string;
   phone: string;
   address?: string;
   isServiceAvailable: boolean;
   coverImages: [];
};

export
{
   createVendorDto
};