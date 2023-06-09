
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  salt: 'salt',
  otp: 'otp',
  otp_expiry: 'otp_expiry',
  phone: 'phone',
  isVerified: 'isVerified'
});

exports.Prisma.MealImageScalarFieldEnum = makeEnum({
  id: 'id',
  price: 'price',
  mealId: 'mealId'
});

exports.Prisma.MealScalarFieldEnum = makeEnum({
  id: 'id',
  mealName: 'mealName',
  rating: 'rating',
  timeToBeReady: 'timeToBeReady',
  category: 'category',
  type: 'type',
  vendorId: 'vendorId'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  orderStatus: 'orderStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  totalPrice: 'totalPrice',
  customerId: 'customerId'
});

exports.Prisma.OrderedMealScalarFieldEnum = makeEnum({
  id: 'id',
  mealId: 'mealId',
  units: 'units',
  orderId: 'orderId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VendorImageScalarFieldEnum = makeEnum({
  id: 'id',
  vendorId: 'vendorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VendorScalarFieldEnum = makeEnum({
  id: 'id',
  pinCode: 'pinCode',
  brandName: 'brandName',
  ownerName: 'ownerName',
  foodType: 'foodType',
  email: 'email',
  password: 'password',
  salt: 'salt',
  phone: 'phone',
  address: 'address',
  isServiceAvailable: 'isServiceAvailable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  rating: 'rating'
});
exports.FoodCategory = makeEnum({
  BREAKFAST: 'BREAKFAST',
  LAUNCH: 'LAUNCH',
  DINNER: 'DINNER'
});

exports.FoodType = makeEnum({
  VEG: 'VEG',
  NON_VEG: 'NON_VEG'
});

exports.Prisma.ModelName = makeEnum({
  Vendor: 'Vendor',
  Meal: 'Meal',
  Order: 'Order',
  OrderedMeal: 'OrderedMeal',
  Customer: 'Customer',
  VendorImage: 'VendorImage',
  MealImage: 'MealImage'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
