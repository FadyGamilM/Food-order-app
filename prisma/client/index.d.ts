
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Vendor
 * 
 */
export type Vendor = {
  id: number
  pinCode: string
  brandName: string
  ownerName: string
  foodType: FoodType[]
  email: string
  password: string
  salt: string
  phone: string
  address: string | null
  isServiceAvailable: boolean | null
  createdAt: Date
  updatedAt: Date
  rating: number
}

/**
 * Model Meal
 * 
 */
export type Meal = {
  id: number
  mealName: string
  rating: number | null
  timeToBeReady: number
  category: FoodCategory
  type: FoodType
  vendorId: number
}

/**
 * Model VendorImage
 * 
 */
export type VendorImage = {
  id: number
  vendorId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MealImage
 * 
 */
export type MealImage = {
  id: number
  price: number
  mealId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const FoodCategory: {
  BREAKFAST: 'BREAKFAST',
  LAUNCH: 'LAUNCH',
  DINNER: 'DINNER'
};

export type FoodCategory = (typeof FoodCategory)[keyof typeof FoodCategory]


export const FoodType: {
  VEG: 'VEG',
  NON_VEG: 'NON_VEG'
};

export type FoodType = (typeof FoodType)[keyof typeof FoodType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<GlobalReject>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<GlobalReject>;

  /**
   * `prisma.vendorImage`: Exposes CRUD operations for the **VendorImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorImages
    * const vendorImages = await prisma.vendorImage.findMany()
    * ```
    */
  get vendorImage(): Prisma.VendorImageDelegate<GlobalReject>;

  /**
   * `prisma.mealImage`: Exposes CRUD operations for the **MealImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealImages
    * const mealImages = await prisma.mealImage.findMany()
    * ```
    */
  get mealImage(): Prisma.MealImageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vendor: 'Vendor',
    Meal: 'Meal',
    VendorImage: 'VendorImage',
    MealImage: 'MealImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */


  export type VendorCountOutputType = {
    coverImages: number
    meals: number
  }

  export type VendorCountOutputTypeSelect = {
    coverImages?: boolean
    meals?: boolean
  }

  export type VendorCountOutputTypeGetPayload<S extends boolean | null | undefined | VendorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VendorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VendorCountOutputTypeArgs)
    ? VendorCountOutputType 
    : S extends { select: any } & (VendorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VendorCountOutputType ? VendorCountOutputType[P] : never
  } 
      : VendorCountOutputType




  // Custom InputTypes

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect | null
  }



  /**
   * Count Type MealCountOutputType
   */


  export type MealCountOutputType = {
    images: number
  }

  export type MealCountOutputTypeSelect = {
    images?: boolean
  }

  export type MealCountOutputTypeGetPayload<S extends boolean | null | undefined | MealCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MealCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MealCountOutputTypeArgs)
    ? MealCountOutputType 
    : S extends { select: any } & (MealCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MealCountOutputType ? MealCountOutputType[P] : never
  } 
      : MealCountOutputType




  // Custom InputTypes

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Vendor
   */


  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    pinCode: string | null
    brandName: string | null
    ownerName: string | null
    email: string | null
    password: string | null
    salt: string | null
    phone: string | null
    address: string | null
    isServiceAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    pinCode: string | null
    brandName: string | null
    ownerName: string | null
    email: string | null
    password: string | null
    salt: string | null
    phone: string | null
    address: string | null
    isServiceAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    pinCode: number
    brandName: number
    ownerName: number
    foodType: number
    email: number
    password: number
    salt: number
    phone: number
    address: number
    isServiceAvailable: number
    createdAt: number
    updatedAt: number
    rating: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    pinCode?: true
    brandName?: true
    ownerName?: true
    email?: true
    password?: true
    salt?: true
    phone?: true
    address?: true
    isServiceAvailable?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    pinCode?: true
    brandName?: true
    ownerName?: true
    email?: true
    password?: true
    salt?: true
    phone?: true
    address?: true
    isServiceAvailable?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    pinCode?: true
    brandName?: true
    ownerName?: true
    foodType?: true
    email?: true
    password?: true
    salt?: true
    phone?: true
    address?: true
    isServiceAvailable?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    _all?: true
  }

  export type VendorAggregateArgs = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs = {
    where?: VendorWhereInput
    orderBy?: Enumerable<VendorOrderByWithAggregationInput>
    by: VendorScalarFieldEnum[]
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }


  export type VendorGroupByOutputType = {
    id: number
    pinCode: string
    brandName: string
    ownerName: string
    foodType: FoodType[]
    email: string
    password: string
    salt: string
    phone: string
    address: string | null
    isServiceAvailable: boolean | null
    createdAt: Date
    updatedAt: Date
    rating: number
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect = {
    id?: boolean
    pinCode?: boolean
    brandName?: boolean
    ownerName?: boolean
    foodType?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    phone?: boolean
    address?: boolean
    isServiceAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    coverImages?: boolean | Vendor$coverImagesArgs
    meals?: boolean | Vendor$mealsArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }


  export type VendorInclude = {
    coverImages?: boolean | Vendor$coverImagesArgs
    meals?: boolean | Vendor$mealsArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }

  export type VendorGetPayload<S extends boolean | null | undefined | VendorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Vendor :
    S extends undefined ? never :
    S extends { include: any } & (VendorArgs | VendorFindManyArgs)
    ? Vendor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coverImages' ? Array < VendorImageGetPayload<S['include'][P]>>  :
        P extends 'meals' ? Array < MealGetPayload<S['include'][P]>>  :
        P extends '_count' ? VendorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VendorArgs | VendorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coverImages' ? Array < VendorImageGetPayload<S['select'][P]>>  :
        P extends 'meals' ? Array < MealGetPayload<S['select'][P]>>  :
        P extends '_count' ? VendorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Vendor ? Vendor[P] : never
  } 
      : Vendor


  type VendorCountArgs = 
    Omit<VendorFindManyArgs, 'select' | 'include'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VendorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Vendor'> extends True ? Prisma__VendorClient<VendorGetPayload<T>> : Prisma__VendorClient<VendorGetPayload<T> | null, null>

    /**
     * Find one Vendor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VendorFindUniqueOrThrowArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VendorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Vendor'> extends True ? Prisma__VendorClient<VendorGetPayload<T>> : Prisma__VendorClient<VendorGetPayload<T> | null, null>

    /**
     * Find the first Vendor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VendorFindFirstOrThrowArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendorFindManyArgs>(
      args?: SelectSubset<T, VendorFindManyArgs>
    ): Prisma.PrismaPromise<Array<VendorGetPayload<T>>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
    **/
    create<T extends VendorCreateArgs>(
      args: SelectSubset<T, VendorCreateArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Create many Vendors.
     *     @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     *     @example
     *     // Create many Vendors
     *     const vendor = await prisma.vendor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VendorCreateManyArgs>(
      args?: SelectSubset<T, VendorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
    **/
    delete<T extends VendorDeleteArgs>(
      args: SelectSubset<T, VendorDeleteArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendorUpdateArgs>(
      args: SelectSubset<T, VendorUpdateArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendorDeleteManyArgs>(
      args?: SelectSubset<T, VendorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendorUpdateManyArgs>(
      args: SelectSubset<T, VendorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
    **/
    upsert<T extends VendorUpsertArgs>(
      args: SelectSubset<T, VendorUpsertArgs>
    ): Prisma__VendorClient<VendorGetPayload<T>>

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VendorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coverImages<T extends Vendor$coverImagesArgs= {}>(args?: Subset<T, Vendor$coverImagesArgs>): Prisma.PrismaPromise<Array<VendorImageGetPayload<T>>| Null>;

    meals<T extends Vendor$mealsArgs= {}>(args?: Subset<T, Vendor$mealsArgs>): Prisma.PrismaPromise<Array<MealGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Vendor base type for findUnique actions
   */
  export type VendorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUnique
   */
  export interface VendorFindUniqueArgs extends VendorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor base type for findFirst actions
   */
  export type VendorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }

  /**
   * Vendor findFirst
   */
  export interface VendorFindFirstArgs extends VendorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: Enumerable<VendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor create
   */
  export type VendorCreateArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }


  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs = {
    /**
     * The data used to create many Vendors.
     */
    data: Enumerable<VendorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Vendor update
   */
  export type VendorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }


  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }


  /**
   * Vendor delete
   */
  export type VendorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }


  /**
   * Vendor.coverImages
   */
  export type Vendor$coverImagesArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    where?: VendorImageWhereInput
    orderBy?: Enumerable<VendorImageOrderByWithRelationInput>
    cursor?: VendorImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VendorImageScalarFieldEnum>
  }


  /**
   * Vendor.meals
   */
  export type Vendor$mealsArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    where?: MealWhereInput
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MealScalarFieldEnum>
  }


  /**
   * Vendor without action
   */
  export type VendorArgs = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorInclude | null
  }



  /**
   * Model Meal
   */


  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    timeToBeReady: number | null
    vendorId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    rating: number | null
    timeToBeReady: number | null
    vendorId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    mealName: string | null
    rating: number | null
    timeToBeReady: number | null
    category: FoodCategory | null
    type: FoodType | null
    vendorId: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    mealName: string | null
    rating: number | null
    timeToBeReady: number | null
    category: FoodCategory | null
    type: FoodType | null
    vendorId: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    mealName: number
    rating: number
    timeToBeReady: number
    category: number
    type: number
    vendorId: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    rating?: true
    timeToBeReady?: true
    vendorId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    rating?: true
    timeToBeReady?: true
    vendorId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    mealName?: true
    rating?: true
    timeToBeReady?: true
    category?: true
    type?: true
    vendorId?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    mealName?: true
    rating?: true
    timeToBeReady?: true
    category?: true
    type?: true
    vendorId?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    mealName?: true
    rating?: true
    timeToBeReady?: true
    category?: true
    type?: true
    vendorId?: true
    _all?: true
  }

  export type MealAggregateArgs = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs = {
    where?: MealWhereInput
    orderBy?: Enumerable<MealOrderByWithAggregationInput>
    by: MealScalarFieldEnum[]
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }


  export type MealGroupByOutputType = {
    id: number
    mealName: string
    rating: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    vendorId: number
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect = {
    id?: boolean
    mealName?: boolean
    rating?: boolean
    timeToBeReady?: boolean
    category?: boolean
    type?: boolean
    vendorId?: boolean
    images?: boolean | Meal$imagesArgs
    vendor?: boolean | VendorArgs
    _count?: boolean | MealCountOutputTypeArgs
  }


  export type MealInclude = {
    images?: boolean | Meal$imagesArgs
    vendor?: boolean | VendorArgs
    _count?: boolean | MealCountOutputTypeArgs
  }

  export type MealGetPayload<S extends boolean | null | undefined | MealArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Meal :
    S extends undefined ? never :
    S extends { include: any } & (MealArgs | MealFindManyArgs)
    ? Meal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'images' ? Array < MealImageGetPayload<S['include'][P]>>  :
        P extends 'vendor' ? VendorGetPayload<S['include'][P]> :
        P extends '_count' ? MealCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MealArgs | MealFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'images' ? Array < MealImageGetPayload<S['select'][P]>>  :
        P extends 'vendor' ? VendorGetPayload<S['select'][P]> :
        P extends '_count' ? MealCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Meal ? Meal[P] : never
  } 
      : Meal


  type MealCountArgs = 
    Omit<MealFindManyArgs, 'select' | 'include'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MealFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MealFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Meal'> extends True ? Prisma__MealClient<MealGetPayload<T>> : Prisma__MealClient<MealGetPayload<T> | null, null>

    /**
     * Find one Meal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MealFindUniqueOrThrowArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MealFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MealFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Meal'> extends True ? Prisma__MealClient<MealGetPayload<T>> : Prisma__MealClient<MealGetPayload<T> | null, null>

    /**
     * Find the first Meal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MealFindFirstOrThrowArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MealFindManyArgs>(
      args?: SelectSubset<T, MealFindManyArgs>
    ): Prisma.PrismaPromise<Array<MealGetPayload<T>>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
    **/
    create<T extends MealCreateArgs>(
      args: SelectSubset<T, MealCreateArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Create many Meals.
     *     @param {MealCreateManyArgs} args - Arguments to create many Meals.
     *     @example
     *     // Create many Meals
     *     const meal = await prisma.meal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MealCreateManyArgs>(
      args?: SelectSubset<T, MealCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
    **/
    delete<T extends MealDeleteArgs>(
      args: SelectSubset<T, MealDeleteArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MealUpdateArgs>(
      args: SelectSubset<T, MealUpdateArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MealDeleteManyArgs>(
      args?: SelectSubset<T, MealDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MealUpdateManyArgs>(
      args: SelectSubset<T, MealUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
    **/
    upsert<T extends MealUpsertArgs>(
      args: SelectSubset<T, MealUpsertArgs>
    ): Prisma__MealClient<MealGetPayload<T>>

    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MealClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    images<T extends Meal$imagesArgs= {}>(args?: Subset<T, Meal$imagesArgs>): Prisma.PrismaPromise<Array<MealImageGetPayload<T>>| Null>;

    vendor<T extends VendorArgs= {}>(args?: Subset<T, VendorArgs>): Prisma__VendorClient<VendorGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Meal base type for findUnique actions
   */
  export type MealFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUnique
   */
  export interface MealFindUniqueArgs extends MealFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal base type for findFirst actions
   */
  export type MealFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: Enumerable<MealScalarFieldEnum>
  }

  /**
   * Meal findFirst
   */
  export interface MealFindFirstArgs extends MealFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: Enumerable<MealScalarFieldEnum>
  }


  /**
   * Meal findMany
   */
  export type MealFindManyArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: Enumerable<MealScalarFieldEnum>
  }


  /**
   * Meal create
   */
  export type MealCreateArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }


  /**
   * Meal createMany
   */
  export type MealCreateManyArgs = {
    /**
     * The data used to create many Meals.
     */
    data: Enumerable<MealCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Meal update
   */
  export type MealUpdateArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
  }


  /**
   * Meal upsert
   */
  export type MealUpsertArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }


  /**
   * Meal delete
   */
  export type MealDeleteArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
  }


  /**
   * Meal.images
   */
  export type Meal$imagesArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    where?: MealImageWhereInput
    orderBy?: Enumerable<MealImageOrderByWithRelationInput>
    cursor?: MealImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MealImageScalarFieldEnum>
  }


  /**
   * Meal without action
   */
  export type MealArgs = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude | null
  }



  /**
   * Model VendorImage
   */


  export type AggregateVendorImage = {
    _count: VendorImageCountAggregateOutputType | null
    _avg: VendorImageAvgAggregateOutputType | null
    _sum: VendorImageSumAggregateOutputType | null
    _min: VendorImageMinAggregateOutputType | null
    _max: VendorImageMaxAggregateOutputType | null
  }

  export type VendorImageAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type VendorImageSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type VendorImageMinAggregateOutputType = {
    id: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorImageMaxAggregateOutputType = {
    id: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorImageCountAggregateOutputType = {
    id: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorImageAvgAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type VendorImageSumAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type VendorImageMinAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorImageMaxAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorImageCountAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorImageAggregateArgs = {
    /**
     * Filter which VendorImage to aggregate.
     */
    where?: VendorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorImages to fetch.
     */
    orderBy?: Enumerable<VendorImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorImages
    **/
    _count?: true | VendorImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorImageMaxAggregateInputType
  }

  export type GetVendorImageAggregateType<T extends VendorImageAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorImage[P]>
      : GetScalarType<T[P], AggregateVendorImage[P]>
  }




  export type VendorImageGroupByArgs = {
    where?: VendorImageWhereInput
    orderBy?: Enumerable<VendorImageOrderByWithAggregationInput>
    by: VendorImageScalarFieldEnum[]
    having?: VendorImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorImageCountAggregateInputType | true
    _avg?: VendorImageAvgAggregateInputType
    _sum?: VendorImageSumAggregateInputType
    _min?: VendorImageMinAggregateInputType
    _max?: VendorImageMaxAggregateInputType
  }


  export type VendorImageGroupByOutputType = {
    id: number
    vendorId: number
    createdAt: Date
    updatedAt: Date
    _count: VendorImageCountAggregateOutputType | null
    _avg: VendorImageAvgAggregateOutputType | null
    _sum: VendorImageSumAggregateOutputType | null
    _min: VendorImageMinAggregateOutputType | null
    _max: VendorImageMaxAggregateOutputType | null
  }

  type GetVendorImageGroupByPayload<T extends VendorImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VendorImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorImageGroupByOutputType[P]>
            : GetScalarType<T[P], VendorImageGroupByOutputType[P]>
        }
      >
    >


  export type VendorImageSelect = {
    id?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Vendor?: boolean | VendorArgs
  }


  export type VendorImageInclude = {
    Vendor?: boolean | VendorArgs
  }

  export type VendorImageGetPayload<S extends boolean | null | undefined | VendorImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VendorImage :
    S extends undefined ? never :
    S extends { include: any } & (VendorImageArgs | VendorImageFindManyArgs)
    ? VendorImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Vendor' ? VendorGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VendorImageArgs | VendorImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Vendor' ? VendorGetPayload<S['select'][P]> :  P extends keyof VendorImage ? VendorImage[P] : never
  } 
      : VendorImage


  type VendorImageCountArgs = 
    Omit<VendorImageFindManyArgs, 'select' | 'include'> & {
      select?: VendorImageCountAggregateInputType | true
    }

  export interface VendorImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VendorImage that matches the filter.
     * @param {VendorImageFindUniqueArgs} args - Arguments to find a VendorImage
     * @example
     * // Get one VendorImage
     * const vendorImage = await prisma.vendorImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendorImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VendorImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VendorImage'> extends True ? Prisma__VendorImageClient<VendorImageGetPayload<T>> : Prisma__VendorImageClient<VendorImageGetPayload<T> | null, null>

    /**
     * Find one VendorImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VendorImageFindUniqueOrThrowArgs} args - Arguments to find a VendorImage
     * @example
     * // Get one VendorImage
     * const vendorImage = await prisma.vendorImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VendorImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VendorImageFindUniqueOrThrowArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Find the first VendorImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageFindFirstArgs} args - Arguments to find a VendorImage
     * @example
     * // Get one VendorImage
     * const vendorImage = await prisma.vendorImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendorImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VendorImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VendorImage'> extends True ? Prisma__VendorImageClient<VendorImageGetPayload<T>> : Prisma__VendorImageClient<VendorImageGetPayload<T> | null, null>

    /**
     * Find the first VendorImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageFindFirstOrThrowArgs} args - Arguments to find a VendorImage
     * @example
     * // Get one VendorImage
     * const vendorImage = await prisma.vendorImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VendorImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VendorImageFindFirstOrThrowArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Find zero or more VendorImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorImages
     * const vendorImages = await prisma.vendorImage.findMany()
     * 
     * // Get first 10 VendorImages
     * const vendorImages = await prisma.vendorImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorImageWithIdOnly = await prisma.vendorImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendorImageFindManyArgs>(
      args?: SelectSubset<T, VendorImageFindManyArgs>
    ): Prisma.PrismaPromise<Array<VendorImageGetPayload<T>>>

    /**
     * Create a VendorImage.
     * @param {VendorImageCreateArgs} args - Arguments to create a VendorImage.
     * @example
     * // Create one VendorImage
     * const VendorImage = await prisma.vendorImage.create({
     *   data: {
     *     // ... data to create a VendorImage
     *   }
     * })
     * 
    **/
    create<T extends VendorImageCreateArgs>(
      args: SelectSubset<T, VendorImageCreateArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Create many VendorImages.
     *     @param {VendorImageCreateManyArgs} args - Arguments to create many VendorImages.
     *     @example
     *     // Create many VendorImages
     *     const vendorImage = await prisma.vendorImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VendorImageCreateManyArgs>(
      args?: SelectSubset<T, VendorImageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VendorImage.
     * @param {VendorImageDeleteArgs} args - Arguments to delete one VendorImage.
     * @example
     * // Delete one VendorImage
     * const VendorImage = await prisma.vendorImage.delete({
     *   where: {
     *     // ... filter to delete one VendorImage
     *   }
     * })
     * 
    **/
    delete<T extends VendorImageDeleteArgs>(
      args: SelectSubset<T, VendorImageDeleteArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Update one VendorImage.
     * @param {VendorImageUpdateArgs} args - Arguments to update one VendorImage.
     * @example
     * // Update one VendorImage
     * const vendorImage = await prisma.vendorImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendorImageUpdateArgs>(
      args: SelectSubset<T, VendorImageUpdateArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Delete zero or more VendorImages.
     * @param {VendorImageDeleteManyArgs} args - Arguments to filter VendorImages to delete.
     * @example
     * // Delete a few VendorImages
     * const { count } = await prisma.vendorImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendorImageDeleteManyArgs>(
      args?: SelectSubset<T, VendorImageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorImages
     * const vendorImage = await prisma.vendorImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendorImageUpdateManyArgs>(
      args: SelectSubset<T, VendorImageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VendorImage.
     * @param {VendorImageUpsertArgs} args - Arguments to update or create a VendorImage.
     * @example
     * // Update or create a VendorImage
     * const vendorImage = await prisma.vendorImage.upsert({
     *   create: {
     *     // ... data to create a VendorImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorImage we want to update
     *   }
     * })
    **/
    upsert<T extends VendorImageUpsertArgs>(
      args: SelectSubset<T, VendorImageUpsertArgs>
    ): Prisma__VendorImageClient<VendorImageGetPayload<T>>

    /**
     * Count the number of VendorImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageCountArgs} args - Arguments to filter VendorImages to count.
     * @example
     * // Count the number of VendorImages
     * const count = await prisma.vendorImage.count({
     *   where: {
     *     // ... the filter for the VendorImages we want to count
     *   }
     * })
    **/
    count<T extends VendorImageCountArgs>(
      args?: Subset<T, VendorImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorImageAggregateArgs>(args: Subset<T, VendorImageAggregateArgs>): Prisma.PrismaPromise<GetVendorImageAggregateType<T>>

    /**
     * Group by VendorImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorImageGroupByArgs['orderBy'] }
        : { orderBy?: VendorImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VendorImageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Vendor<T extends VendorArgs= {}>(args?: Subset<T, VendorArgs>): Prisma__VendorClient<VendorGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VendorImage base type for findUnique actions
   */
  export type VendorImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter, which VendorImage to fetch.
     */
    where: VendorImageWhereUniqueInput
  }

  /**
   * VendorImage findUnique
   */
  export interface VendorImageFindUniqueArgs extends VendorImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VendorImage findUniqueOrThrow
   */
  export type VendorImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter, which VendorImage to fetch.
     */
    where: VendorImageWhereUniqueInput
  }


  /**
   * VendorImage base type for findFirst actions
   */
  export type VendorImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter, which VendorImage to fetch.
     */
    where?: VendorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorImages to fetch.
     */
    orderBy?: Enumerable<VendorImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorImages.
     */
    cursor?: VendorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorImages.
     */
    distinct?: Enumerable<VendorImageScalarFieldEnum>
  }

  /**
   * VendorImage findFirst
   */
  export interface VendorImageFindFirstArgs extends VendorImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VendorImage findFirstOrThrow
   */
  export type VendorImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter, which VendorImage to fetch.
     */
    where?: VendorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorImages to fetch.
     */
    orderBy?: Enumerable<VendorImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorImages.
     */
    cursor?: VendorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorImages.
     */
    distinct?: Enumerable<VendorImageScalarFieldEnum>
  }


  /**
   * VendorImage findMany
   */
  export type VendorImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter, which VendorImages to fetch.
     */
    where?: VendorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorImages to fetch.
     */
    orderBy?: Enumerable<VendorImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorImages.
     */
    cursor?: VendorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorImages.
     */
    skip?: number
    distinct?: Enumerable<VendorImageScalarFieldEnum>
  }


  /**
   * VendorImage create
   */
  export type VendorImageCreateArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * The data needed to create a VendorImage.
     */
    data: XOR<VendorImageCreateInput, VendorImageUncheckedCreateInput>
  }


  /**
   * VendorImage createMany
   */
  export type VendorImageCreateManyArgs = {
    /**
     * The data used to create many VendorImages.
     */
    data: Enumerable<VendorImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VendorImage update
   */
  export type VendorImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * The data needed to update a VendorImage.
     */
    data: XOR<VendorImageUpdateInput, VendorImageUncheckedUpdateInput>
    /**
     * Choose, which VendorImage to update.
     */
    where: VendorImageWhereUniqueInput
  }


  /**
   * VendorImage updateMany
   */
  export type VendorImageUpdateManyArgs = {
    /**
     * The data used to update VendorImages.
     */
    data: XOR<VendorImageUpdateManyMutationInput, VendorImageUncheckedUpdateManyInput>
    /**
     * Filter which VendorImages to update
     */
    where?: VendorImageWhereInput
  }


  /**
   * VendorImage upsert
   */
  export type VendorImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * The filter to search for the VendorImage to update in case it exists.
     */
    where: VendorImageWhereUniqueInput
    /**
     * In case the VendorImage found by the `where` argument doesn't exist, create a new VendorImage with this data.
     */
    create: XOR<VendorImageCreateInput, VendorImageUncheckedCreateInput>
    /**
     * In case the VendorImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorImageUpdateInput, VendorImageUncheckedUpdateInput>
  }


  /**
   * VendorImage delete
   */
  export type VendorImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
    /**
     * Filter which VendorImage to delete.
     */
    where: VendorImageWhereUniqueInput
  }


  /**
   * VendorImage deleteMany
   */
  export type VendorImageDeleteManyArgs = {
    /**
     * Filter which VendorImages to delete
     */
    where?: VendorImageWhereInput
  }


  /**
   * VendorImage without action
   */
  export type VendorImageArgs = {
    /**
     * Select specific fields to fetch from the VendorImage
     */
    select?: VendorImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VendorImageInclude | null
  }



  /**
   * Model MealImage
   */


  export type AggregateMealImage = {
    _count: MealImageCountAggregateOutputType | null
    _avg: MealImageAvgAggregateOutputType | null
    _sum: MealImageSumAggregateOutputType | null
    _min: MealImageMinAggregateOutputType | null
    _max: MealImageMaxAggregateOutputType | null
  }

  export type MealImageAvgAggregateOutputType = {
    id: number | null
    price: number | null
    mealId: number | null
  }

  export type MealImageSumAggregateOutputType = {
    id: number | null
    price: number | null
    mealId: number | null
  }

  export type MealImageMinAggregateOutputType = {
    id: number | null
    price: number | null
    mealId: number | null
  }

  export type MealImageMaxAggregateOutputType = {
    id: number | null
    price: number | null
    mealId: number | null
  }

  export type MealImageCountAggregateOutputType = {
    id: number
    price: number
    mealId: number
    _all: number
  }


  export type MealImageAvgAggregateInputType = {
    id?: true
    price?: true
    mealId?: true
  }

  export type MealImageSumAggregateInputType = {
    id?: true
    price?: true
    mealId?: true
  }

  export type MealImageMinAggregateInputType = {
    id?: true
    price?: true
    mealId?: true
  }

  export type MealImageMaxAggregateInputType = {
    id?: true
    price?: true
    mealId?: true
  }

  export type MealImageCountAggregateInputType = {
    id?: true
    price?: true
    mealId?: true
    _all?: true
  }

  export type MealImageAggregateArgs = {
    /**
     * Filter which MealImage to aggregate.
     */
    where?: MealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Enumerable<MealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealImages
    **/
    _count?: true | MealImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealImageMaxAggregateInputType
  }

  export type GetMealImageAggregateType<T extends MealImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMealImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealImage[P]>
      : GetScalarType<T[P], AggregateMealImage[P]>
  }




  export type MealImageGroupByArgs = {
    where?: MealImageWhereInput
    orderBy?: Enumerable<MealImageOrderByWithAggregationInput>
    by: MealImageScalarFieldEnum[]
    having?: MealImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealImageCountAggregateInputType | true
    _avg?: MealImageAvgAggregateInputType
    _sum?: MealImageSumAggregateInputType
    _min?: MealImageMinAggregateInputType
    _max?: MealImageMaxAggregateInputType
  }


  export type MealImageGroupByOutputType = {
    id: number
    price: number
    mealId: number
    _count: MealImageCountAggregateOutputType | null
    _avg: MealImageAvgAggregateOutputType | null
    _sum: MealImageSumAggregateOutputType | null
    _min: MealImageMinAggregateOutputType | null
    _max: MealImageMaxAggregateOutputType | null
  }

  type GetMealImageGroupByPayload<T extends MealImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MealImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealImageGroupByOutputType[P]>
            : GetScalarType<T[P], MealImageGroupByOutputType[P]>
        }
      >
    >


  export type MealImageSelect = {
    id?: boolean
    price?: boolean
    mealId?: boolean
    meal?: boolean | MealArgs
  }


  export type MealImageInclude = {
    meal?: boolean | MealArgs
  }

  export type MealImageGetPayload<S extends boolean | null | undefined | MealImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MealImage :
    S extends undefined ? never :
    S extends { include: any } & (MealImageArgs | MealImageFindManyArgs)
    ? MealImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'meal' ? MealGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MealImageArgs | MealImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'meal' ? MealGetPayload<S['select'][P]> :  P extends keyof MealImage ? MealImage[P] : never
  } 
      : MealImage


  type MealImageCountArgs = 
    Omit<MealImageFindManyArgs, 'select' | 'include'> & {
      select?: MealImageCountAggregateInputType | true
    }

  export interface MealImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MealImage that matches the filter.
     * @param {MealImageFindUniqueArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MealImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MealImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MealImage'> extends True ? Prisma__MealImageClient<MealImageGetPayload<T>> : Prisma__MealImageClient<MealImageGetPayload<T> | null, null>

    /**
     * Find one MealImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MealImageFindUniqueOrThrowArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MealImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MealImageFindUniqueOrThrowArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Find the first MealImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindFirstArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MealImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MealImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MealImage'> extends True ? Prisma__MealImageClient<MealImageGetPayload<T>> : Prisma__MealImageClient<MealImageGetPayload<T> | null, null>

    /**
     * Find the first MealImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindFirstOrThrowArgs} args - Arguments to find a MealImage
     * @example
     * // Get one MealImage
     * const mealImage = await prisma.mealImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MealImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MealImageFindFirstOrThrowArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Find zero or more MealImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealImages
     * const mealImages = await prisma.mealImage.findMany()
     * 
     * // Get first 10 MealImages
     * const mealImages = await prisma.mealImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealImageWithIdOnly = await prisma.mealImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MealImageFindManyArgs>(
      args?: SelectSubset<T, MealImageFindManyArgs>
    ): Prisma.PrismaPromise<Array<MealImageGetPayload<T>>>

    /**
     * Create a MealImage.
     * @param {MealImageCreateArgs} args - Arguments to create a MealImage.
     * @example
     * // Create one MealImage
     * const MealImage = await prisma.mealImage.create({
     *   data: {
     *     // ... data to create a MealImage
     *   }
     * })
     * 
    **/
    create<T extends MealImageCreateArgs>(
      args: SelectSubset<T, MealImageCreateArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Create many MealImages.
     *     @param {MealImageCreateManyArgs} args - Arguments to create many MealImages.
     *     @example
     *     // Create many MealImages
     *     const mealImage = await prisma.mealImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MealImageCreateManyArgs>(
      args?: SelectSubset<T, MealImageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MealImage.
     * @param {MealImageDeleteArgs} args - Arguments to delete one MealImage.
     * @example
     * // Delete one MealImage
     * const MealImage = await prisma.mealImage.delete({
     *   where: {
     *     // ... filter to delete one MealImage
     *   }
     * })
     * 
    **/
    delete<T extends MealImageDeleteArgs>(
      args: SelectSubset<T, MealImageDeleteArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Update one MealImage.
     * @param {MealImageUpdateArgs} args - Arguments to update one MealImage.
     * @example
     * // Update one MealImage
     * const mealImage = await prisma.mealImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MealImageUpdateArgs>(
      args: SelectSubset<T, MealImageUpdateArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Delete zero or more MealImages.
     * @param {MealImageDeleteManyArgs} args - Arguments to filter MealImages to delete.
     * @example
     * // Delete a few MealImages
     * const { count } = await prisma.mealImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MealImageDeleteManyArgs>(
      args?: SelectSubset<T, MealImageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealImages
     * const mealImage = await prisma.mealImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MealImageUpdateManyArgs>(
      args: SelectSubset<T, MealImageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MealImage.
     * @param {MealImageUpsertArgs} args - Arguments to update or create a MealImage.
     * @example
     * // Update or create a MealImage
     * const mealImage = await prisma.mealImage.upsert({
     *   create: {
     *     // ... data to create a MealImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealImage we want to update
     *   }
     * })
    **/
    upsert<T extends MealImageUpsertArgs>(
      args: SelectSubset<T, MealImageUpsertArgs>
    ): Prisma__MealImageClient<MealImageGetPayload<T>>

    /**
     * Count the number of MealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageCountArgs} args - Arguments to filter MealImages to count.
     * @example
     * // Count the number of MealImages
     * const count = await prisma.mealImage.count({
     *   where: {
     *     // ... the filter for the MealImages we want to count
     *   }
     * })
    **/
    count<T extends MealImageCountArgs>(
      args?: Subset<T, MealImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealImageAggregateArgs>(args: Subset<T, MealImageAggregateArgs>): Prisma.PrismaPromise<GetMealImageAggregateType<T>>

    /**
     * Group by MealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealImageGroupByArgs['orderBy'] }
        : { orderBy?: MealImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MealImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MealImageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    meal<T extends MealArgs= {}>(args?: Subset<T, MealArgs>): Prisma__MealClient<MealGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MealImage base type for findUnique actions
   */
  export type MealImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter, which MealImage to fetch.
     */
    where: MealImageWhereUniqueInput
  }

  /**
   * MealImage findUnique
   */
  export interface MealImageFindUniqueArgs extends MealImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MealImage findUniqueOrThrow
   */
  export type MealImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter, which MealImage to fetch.
     */
    where: MealImageWhereUniqueInput
  }


  /**
   * MealImage base type for findFirst actions
   */
  export type MealImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter, which MealImage to fetch.
     */
    where?: MealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Enumerable<MealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealImages.
     */
    cursor?: MealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealImages.
     */
    distinct?: Enumerable<MealImageScalarFieldEnum>
  }

  /**
   * MealImage findFirst
   */
  export interface MealImageFindFirstArgs extends MealImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MealImage findFirstOrThrow
   */
  export type MealImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter, which MealImage to fetch.
     */
    where?: MealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Enumerable<MealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealImages.
     */
    cursor?: MealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealImages.
     */
    distinct?: Enumerable<MealImageScalarFieldEnum>
  }


  /**
   * MealImage findMany
   */
  export type MealImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter, which MealImages to fetch.
     */
    where?: MealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealImages to fetch.
     */
    orderBy?: Enumerable<MealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealImages.
     */
    cursor?: MealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealImages.
     */
    skip?: number
    distinct?: Enumerable<MealImageScalarFieldEnum>
  }


  /**
   * MealImage create
   */
  export type MealImageCreateArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * The data needed to create a MealImage.
     */
    data: XOR<MealImageCreateInput, MealImageUncheckedCreateInput>
  }


  /**
   * MealImage createMany
   */
  export type MealImageCreateManyArgs = {
    /**
     * The data used to create many MealImages.
     */
    data: Enumerable<MealImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MealImage update
   */
  export type MealImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * The data needed to update a MealImage.
     */
    data: XOR<MealImageUpdateInput, MealImageUncheckedUpdateInput>
    /**
     * Choose, which MealImage to update.
     */
    where: MealImageWhereUniqueInput
  }


  /**
   * MealImage updateMany
   */
  export type MealImageUpdateManyArgs = {
    /**
     * The data used to update MealImages.
     */
    data: XOR<MealImageUpdateManyMutationInput, MealImageUncheckedUpdateManyInput>
    /**
     * Filter which MealImages to update
     */
    where?: MealImageWhereInput
  }


  /**
   * MealImage upsert
   */
  export type MealImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * The filter to search for the MealImage to update in case it exists.
     */
    where: MealImageWhereUniqueInput
    /**
     * In case the MealImage found by the `where` argument doesn't exist, create a new MealImage with this data.
     */
    create: XOR<MealImageCreateInput, MealImageUncheckedCreateInput>
    /**
     * In case the MealImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealImageUpdateInput, MealImageUncheckedUpdateInput>
  }


  /**
   * MealImage delete
   */
  export type MealImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
    /**
     * Filter which MealImage to delete.
     */
    where: MealImageWhereUniqueInput
  }


  /**
   * MealImage deleteMany
   */
  export type MealImageDeleteManyArgs = {
    /**
     * Filter which MealImages to delete
     */
    where?: MealImageWhereInput
  }


  /**
   * MealImage without action
   */
  export type MealImageArgs = {
    /**
     * Select specific fields to fetch from the MealImage
     */
    select?: MealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MealImageScalarFieldEnum: {
    id: 'id',
    price: 'price',
    mealId: 'mealId'
  };

  export type MealImageScalarFieldEnum = (typeof MealImageScalarFieldEnum)[keyof typeof MealImageScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    mealName: 'mealName',
    rating: 'rating',
    timeToBeReady: 'timeToBeReady',
    category: 'category',
    type: 'type',
    vendorId: 'vendorId'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorImageScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorImageScalarFieldEnum = (typeof VendorImageScalarFieldEnum)[keyof typeof VendorImageScalarFieldEnum]


  export const VendorScalarFieldEnum: {
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
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: Enumerable<VendorWhereInput>
    OR?: Enumerable<VendorWhereInput>
    NOT?: Enumerable<VendorWhereInput>
    id?: IntFilter | number
    pinCode?: StringFilter | string
    brandName?: StringFilter | string
    ownerName?: StringFilter | string
    foodType?: EnumFoodTypeNullableListFilter
    email?: StringFilter | string
    password?: StringFilter | string
    salt?: StringFilter | string
    phone?: StringFilter | string
    address?: StringNullableFilter | string | null
    isServiceAvailable?: BoolNullableFilter | boolean | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rating?: IntFilter | number
    coverImages?: VendorImageListRelationFilter
    meals?: MealListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    pinCode?: SortOrder
    brandName?: SortOrder
    ownerName?: SortOrder
    foodType?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isServiceAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    coverImages?: VendorImageOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    pinCode?: SortOrder
    brandName?: SortOrder
    ownerName?: SortOrder
    foodType?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isServiceAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VendorScalarWhereWithAggregatesInput>
    OR?: Enumerable<VendorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VendorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    pinCode?: StringWithAggregatesFilter | string
    brandName?: StringWithAggregatesFilter | string
    ownerName?: StringWithAggregatesFilter | string
    foodType?: EnumFoodTypeNullableListFilter
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    salt?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    isServiceAvailable?: BoolNullableWithAggregatesFilter | boolean | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    rating?: IntWithAggregatesFilter | number
  }

  export type MealWhereInput = {
    AND?: Enumerable<MealWhereInput>
    OR?: Enumerable<MealWhereInput>
    NOT?: Enumerable<MealWhereInput>
    id?: IntFilter | number
    mealName?: StringFilter | string
    rating?: IntNullableFilter | number | null
    timeToBeReady?: IntFilter | number
    category?: EnumFoodCategoryFilter | FoodCategory
    type?: EnumFoodTypeFilter | FoodType
    vendorId?: IntFilter | number
    images?: MealImageListRelationFilter
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    mealName?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    category?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
    images?: MealImageOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = {
    id?: number
  }

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    mealName?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    category?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MealScalarWhereWithAggregatesInput>
    OR?: Enumerable<MealScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MealScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mealName?: StringWithAggregatesFilter | string
    rating?: IntNullableWithAggregatesFilter | number | null
    timeToBeReady?: IntWithAggregatesFilter | number
    category?: EnumFoodCategoryWithAggregatesFilter | FoodCategory
    type?: EnumFoodTypeWithAggregatesFilter | FoodType
    vendorId?: IntWithAggregatesFilter | number
  }

  export type VendorImageWhereInput = {
    AND?: Enumerable<VendorImageWhereInput>
    OR?: Enumerable<VendorImageWhereInput>
    NOT?: Enumerable<VendorImageWhereInput>
    id?: IntFilter | number
    vendorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type VendorImageOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Vendor?: VendorOrderByWithRelationInput
  }

  export type VendorImageWhereUniqueInput = {
    id?: number
  }

  export type VendorImageOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorImageCountOrderByAggregateInput
    _avg?: VendorImageAvgOrderByAggregateInput
    _max?: VendorImageMaxOrderByAggregateInput
    _min?: VendorImageMinOrderByAggregateInput
    _sum?: VendorImageSumOrderByAggregateInput
  }

  export type VendorImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VendorImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<VendorImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VendorImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    vendorId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MealImageWhereInput = {
    AND?: Enumerable<MealImageWhereInput>
    OR?: Enumerable<MealImageWhereInput>
    NOT?: Enumerable<MealImageWhereInput>
    id?: IntFilter | number
    price?: FloatFilter | number
    mealId?: IntFilter | number
    meal?: XOR<MealRelationFilter, MealWhereInput>
  }

  export type MealImageOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type MealImageWhereUniqueInput = {
    id?: number
  }

  export type MealImageOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
    _count?: MealImageCountOrderByAggregateInput
    _avg?: MealImageAvgOrderByAggregateInput
    _max?: MealImageMaxOrderByAggregateInput
    _min?: MealImageMinOrderByAggregateInput
    _sum?: MealImageSumOrderByAggregateInput
  }

  export type MealImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MealImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MealImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MealImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    price?: FloatWithAggregatesFilter | number
    mealId?: IntWithAggregatesFilter | number
  }

  export type VendorCreateInput = {
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    coverImages?: VendorImageCreateNestedManyWithoutVendorInput
    meals?: MealCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    coverImages?: VendorImageUncheckedCreateNestedManyWithoutVendorInput
    meals?: MealUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImages?: VendorImageUpdateManyWithoutVendorNestedInput
    meals?: MealUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImages?: VendorImageUncheckedUpdateManyWithoutVendorNestedInput
    meals?: MealUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
  }

  export type VendorUpdateManyMutationInput = {
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    images?: MealImageCreateNestedManyWithoutMealInput
    vendor: VendorCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    vendorId: number
    images?: MealImageUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    images?: MealImageUpdateManyWithoutMealNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    vendorId?: IntFieldUpdateOperationsInput | number
    images?: MealImageUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    vendorId: number
  }

  export type MealUpdateManyMutationInput = {
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    vendorId?: IntFieldUpdateOperationsInput | number
  }

  export type VendorImageCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Vendor: VendorCreateNestedOneWithoutCoverImagesInput
  }

  export type VendorImageUncheckedCreateInput = {
    id?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vendor?: VendorUpdateOneRequiredWithoutCoverImagesNestedInput
  }

  export type VendorImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorImageCreateManyInput = {
    id?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealImageCreateInput = {
    price: number
    meal: MealCreateNestedOneWithoutImagesInput
  }

  export type MealImageUncheckedCreateInput = {
    id?: number
    price: number
    mealId: number
  }

  export type MealImageUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    meal?: MealUpdateOneRequiredWithoutImagesNestedInput
  }

  export type MealImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
  }

  export type MealImageCreateManyInput = {
    id?: number
    price: number
    mealId: number
  }

  export type MealImageUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MealImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumFoodTypeNullableListFilter = {
    equals?: Enumerable<FoodType> | null
    has?: FoodType | null
    hasEvery?: Enumerable<FoodType>
    hasSome?: Enumerable<FoodType>
    isEmpty?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type VendorImageListRelationFilter = {
    every?: VendorImageWhereInput
    some?: VendorImageWhereInput
    none?: VendorImageWhereInput
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type VendorImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    pinCode?: SortOrder
    brandName?: SortOrder
    ownerName?: SortOrder
    foodType?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isServiceAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    pinCode?: SortOrder
    brandName?: SortOrder
    ownerName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isServiceAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    pinCode?: SortOrder
    brandName?: SortOrder
    ownerName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isServiceAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type EnumFoodCategoryFilter = {
    equals?: FoodCategory
    in?: Enumerable<FoodCategory>
    notIn?: Enumerable<FoodCategory>
    not?: NestedEnumFoodCategoryFilter | FoodCategory
  }

  export type EnumFoodTypeFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeFilter | FoodType
  }

  export type MealImageListRelationFilter = {
    every?: MealImageWhereInput
    some?: MealImageWhereInput
    none?: MealImageWhereInput
  }

  export type VendorRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type MealImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    mealName?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    category?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    vendorId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    mealName?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    category?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    mealName?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    category?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    timeToBeReady?: SortOrder
    vendorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumFoodCategoryWithAggregatesFilter = {
    equals?: FoodCategory
    in?: Enumerable<FoodCategory>
    notIn?: Enumerable<FoodCategory>
    not?: NestedEnumFoodCategoryWithAggregatesFilter | FoodCategory
    _count?: NestedIntFilter
    _min?: NestedEnumFoodCategoryFilter
    _max?: NestedEnumFoodCategoryFilter
  }

  export type EnumFoodTypeWithAggregatesFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeWithAggregatesFilter | FoodType
    _count?: NestedIntFilter
    _min?: NestedEnumFoodTypeFilter
    _max?: NestedEnumFoodTypeFilter
  }

  export type VendorImageCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorImageAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorImageMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorImageMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorImageSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type MealRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type MealImageCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
  }

  export type MealImageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
  }

  export type MealImageMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
  }

  export type MealImageMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
  }

  export type MealImageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    mealId?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type VendorCreatefoodTypeInput = {
    set: Enumerable<FoodType>
  }

  export type VendorImageCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<VendorImageCreateWithoutVendorInput>, Enumerable<VendorImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<VendorImageCreateOrConnectWithoutVendorInput>
    createMany?: VendorImageCreateManyVendorInputEnvelope
    connect?: Enumerable<VendorImageWhereUniqueInput>
  }

  export type MealCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<MealCreateWithoutVendorInput>, Enumerable<MealUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutVendorInput>
    createMany?: MealCreateManyVendorInputEnvelope
    connect?: Enumerable<MealWhereUniqueInput>
  }

  export type VendorImageUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<VendorImageCreateWithoutVendorInput>, Enumerable<VendorImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<VendorImageCreateOrConnectWithoutVendorInput>
    createMany?: VendorImageCreateManyVendorInputEnvelope
    connect?: Enumerable<VendorImageWhereUniqueInput>
  }

  export type MealUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<MealCreateWithoutVendorInput>, Enumerable<MealUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutVendorInput>
    createMany?: MealCreateManyVendorInputEnvelope
    connect?: Enumerable<MealWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VendorUpdatefoodTypeInput = {
    set?: Enumerable<FoodType>
    push?: Enumerable<FoodType>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorImageUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<VendorImageCreateWithoutVendorInput>, Enumerable<VendorImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<VendorImageCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<VendorImageUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: VendorImageCreateManyVendorInputEnvelope
    set?: Enumerable<VendorImageWhereUniqueInput>
    disconnect?: Enumerable<VendorImageWhereUniqueInput>
    delete?: Enumerable<VendorImageWhereUniqueInput>
    connect?: Enumerable<VendorImageWhereUniqueInput>
    update?: Enumerable<VendorImageUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<VendorImageUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<VendorImageScalarWhereInput>
  }

  export type MealUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<MealCreateWithoutVendorInput>, Enumerable<MealUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<MealUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: MealCreateManyVendorInputEnvelope
    set?: Enumerable<MealWhereUniqueInput>
    disconnect?: Enumerable<MealWhereUniqueInput>
    delete?: Enumerable<MealWhereUniqueInput>
    connect?: Enumerable<MealWhereUniqueInput>
    update?: Enumerable<MealUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<MealUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<MealScalarWhereInput>
  }

  export type VendorImageUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<VendorImageCreateWithoutVendorInput>, Enumerable<VendorImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<VendorImageCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<VendorImageUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: VendorImageCreateManyVendorInputEnvelope
    set?: Enumerable<VendorImageWhereUniqueInput>
    disconnect?: Enumerable<VendorImageWhereUniqueInput>
    delete?: Enumerable<VendorImageWhereUniqueInput>
    connect?: Enumerable<VendorImageWhereUniqueInput>
    update?: Enumerable<VendorImageUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<VendorImageUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<VendorImageScalarWhereInput>
  }

  export type MealUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<MealCreateWithoutVendorInput>, Enumerable<MealUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<MealUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: MealCreateManyVendorInputEnvelope
    set?: Enumerable<MealWhereUniqueInput>
    disconnect?: Enumerable<MealWhereUniqueInput>
    delete?: Enumerable<MealWhereUniqueInput>
    connect?: Enumerable<MealWhereUniqueInput>
    update?: Enumerable<MealUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<MealUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<MealScalarWhereInput>
  }

  export type MealImageCreateNestedManyWithoutMealInput = {
    create?: XOR<Enumerable<MealImageCreateWithoutMealInput>, Enumerable<MealImageUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<MealImageCreateOrConnectWithoutMealInput>
    createMany?: MealImageCreateManyMealInputEnvelope
    connect?: Enumerable<MealImageWhereUniqueInput>
  }

  export type VendorCreateNestedOneWithoutMealsInput = {
    create?: XOR<VendorCreateWithoutMealsInput, VendorUncheckedCreateWithoutMealsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMealsInput
    connect?: VendorWhereUniqueInput
  }

  export type MealImageUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<Enumerable<MealImageCreateWithoutMealInput>, Enumerable<MealImageUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<MealImageCreateOrConnectWithoutMealInput>
    createMany?: MealImageCreateManyMealInputEnvelope
    connect?: Enumerable<MealImageWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFoodCategoryFieldUpdateOperationsInput = {
    set?: FoodCategory
  }

  export type EnumFoodTypeFieldUpdateOperationsInput = {
    set?: FoodType
  }

  export type MealImageUpdateManyWithoutMealNestedInput = {
    create?: XOR<Enumerable<MealImageCreateWithoutMealInput>, Enumerable<MealImageUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<MealImageCreateOrConnectWithoutMealInput>
    upsert?: Enumerable<MealImageUpsertWithWhereUniqueWithoutMealInput>
    createMany?: MealImageCreateManyMealInputEnvelope
    set?: Enumerable<MealImageWhereUniqueInput>
    disconnect?: Enumerable<MealImageWhereUniqueInput>
    delete?: Enumerable<MealImageWhereUniqueInput>
    connect?: Enumerable<MealImageWhereUniqueInput>
    update?: Enumerable<MealImageUpdateWithWhereUniqueWithoutMealInput>
    updateMany?: Enumerable<MealImageUpdateManyWithWhereWithoutMealInput>
    deleteMany?: Enumerable<MealImageScalarWhereInput>
  }

  export type VendorUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<VendorCreateWithoutMealsInput, VendorUncheckedCreateWithoutMealsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMealsInput
    upsert?: VendorUpsertWithoutMealsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutMealsInput, VendorUncheckedUpdateWithoutMealsInput>
  }

  export type MealImageUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<Enumerable<MealImageCreateWithoutMealInput>, Enumerable<MealImageUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<MealImageCreateOrConnectWithoutMealInput>
    upsert?: Enumerable<MealImageUpsertWithWhereUniqueWithoutMealInput>
    createMany?: MealImageCreateManyMealInputEnvelope
    set?: Enumerable<MealImageWhereUniqueInput>
    disconnect?: Enumerable<MealImageWhereUniqueInput>
    delete?: Enumerable<MealImageWhereUniqueInput>
    connect?: Enumerable<MealImageWhereUniqueInput>
    update?: Enumerable<MealImageUpdateWithWhereUniqueWithoutMealInput>
    updateMany?: Enumerable<MealImageUpdateManyWithWhereWithoutMealInput>
    deleteMany?: Enumerable<MealImageScalarWhereInput>
  }

  export type VendorCreateNestedOneWithoutCoverImagesInput = {
    create?: XOR<VendorCreateWithoutCoverImagesInput, VendorUncheckedCreateWithoutCoverImagesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCoverImagesInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutCoverImagesNestedInput = {
    create?: XOR<VendorCreateWithoutCoverImagesInput, VendorUncheckedCreateWithoutCoverImagesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCoverImagesInput
    upsert?: VendorUpsertWithoutCoverImagesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutCoverImagesInput, VendorUncheckedUpdateWithoutCoverImagesInput>
  }

  export type MealCreateNestedOneWithoutImagesInput = {
    create?: XOR<MealCreateWithoutImagesInput, MealUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MealCreateOrConnectWithoutImagesInput
    connect?: MealWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MealCreateWithoutImagesInput, MealUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MealCreateOrConnectWithoutImagesInput
    upsert?: MealUpsertWithoutImagesInput
    connect?: MealWhereUniqueInput
    update?: XOR<MealUpdateWithoutImagesInput, MealUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumFoodCategoryFilter = {
    equals?: FoodCategory
    in?: Enumerable<FoodCategory>
    notIn?: Enumerable<FoodCategory>
    not?: NestedEnumFoodCategoryFilter | FoodCategory
  }

  export type NestedEnumFoodTypeFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeFilter | FoodType
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumFoodCategoryWithAggregatesFilter = {
    equals?: FoodCategory
    in?: Enumerable<FoodCategory>
    notIn?: Enumerable<FoodCategory>
    not?: NestedEnumFoodCategoryWithAggregatesFilter | FoodCategory
    _count?: NestedIntFilter
    _min?: NestedEnumFoodCategoryFilter
    _max?: NestedEnumFoodCategoryFilter
  }

  export type NestedEnumFoodTypeWithAggregatesFilter = {
    equals?: FoodType
    in?: Enumerable<FoodType>
    notIn?: Enumerable<FoodType>
    not?: NestedEnumFoodTypeWithAggregatesFilter | FoodType
    _count?: NestedIntFilter
    _min?: NestedEnumFoodTypeFilter
    _max?: NestedEnumFoodTypeFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type VendorImageCreateWithoutVendorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorImageUncheckedCreateWithoutVendorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorImageCreateOrConnectWithoutVendorInput = {
    where: VendorImageWhereUniqueInput
    create: XOR<VendorImageCreateWithoutVendorInput, VendorImageUncheckedCreateWithoutVendorInput>
  }

  export type VendorImageCreateManyVendorInputEnvelope = {
    data: Enumerable<VendorImageCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutVendorInput = {
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    images?: MealImageCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutVendorInput = {
    id?: number
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    images?: MealImageUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutVendorInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutVendorInput, MealUncheckedCreateWithoutVendorInput>
  }

  export type MealCreateManyVendorInputEnvelope = {
    data: Enumerable<MealCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type VendorImageUpsertWithWhereUniqueWithoutVendorInput = {
    where: VendorImageWhereUniqueInput
    update: XOR<VendorImageUpdateWithoutVendorInput, VendorImageUncheckedUpdateWithoutVendorInput>
    create: XOR<VendorImageCreateWithoutVendorInput, VendorImageUncheckedCreateWithoutVendorInput>
  }

  export type VendorImageUpdateWithWhereUniqueWithoutVendorInput = {
    where: VendorImageWhereUniqueInput
    data: XOR<VendorImageUpdateWithoutVendorInput, VendorImageUncheckedUpdateWithoutVendorInput>
  }

  export type VendorImageUpdateManyWithWhereWithoutVendorInput = {
    where: VendorImageScalarWhereInput
    data: XOR<VendorImageUpdateManyMutationInput, VendorImageUncheckedUpdateManyWithoutCoverImagesInput>
  }

  export type VendorImageScalarWhereInput = {
    AND?: Enumerable<VendorImageScalarWhereInput>
    OR?: Enumerable<VendorImageScalarWhereInput>
    NOT?: Enumerable<VendorImageScalarWhereInput>
    id?: IntFilter | number
    vendorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MealUpsertWithWhereUniqueWithoutVendorInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutVendorInput, MealUncheckedUpdateWithoutVendorInput>
    create: XOR<MealCreateWithoutVendorInput, MealUncheckedCreateWithoutVendorInput>
  }

  export type MealUpdateWithWhereUniqueWithoutVendorInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutVendorInput, MealUncheckedUpdateWithoutVendorInput>
  }

  export type MealUpdateManyWithWhereWithoutVendorInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutMealsInput>
  }

  export type MealScalarWhereInput = {
    AND?: Enumerable<MealScalarWhereInput>
    OR?: Enumerable<MealScalarWhereInput>
    NOT?: Enumerable<MealScalarWhereInput>
    id?: IntFilter | number
    mealName?: StringFilter | string
    rating?: IntNullableFilter | number | null
    timeToBeReady?: IntFilter | number
    category?: EnumFoodCategoryFilter | FoodCategory
    type?: EnumFoodTypeFilter | FoodType
    vendorId?: IntFilter | number
  }

  export type MealImageCreateWithoutMealInput = {
    price: number
  }

  export type MealImageUncheckedCreateWithoutMealInput = {
    id?: number
    price: number
  }

  export type MealImageCreateOrConnectWithoutMealInput = {
    where: MealImageWhereUniqueInput
    create: XOR<MealImageCreateWithoutMealInput, MealImageUncheckedCreateWithoutMealInput>
  }

  export type MealImageCreateManyMealInputEnvelope = {
    data: Enumerable<MealImageCreateManyMealInput>
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutMealsInput = {
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    coverImages?: VendorImageCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMealsInput = {
    id?: number
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    coverImages?: VendorImageUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMealsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMealsInput, VendorUncheckedCreateWithoutMealsInput>
  }

  export type MealImageUpsertWithWhereUniqueWithoutMealInput = {
    where: MealImageWhereUniqueInput
    update: XOR<MealImageUpdateWithoutMealInput, MealImageUncheckedUpdateWithoutMealInput>
    create: XOR<MealImageCreateWithoutMealInput, MealImageUncheckedCreateWithoutMealInput>
  }

  export type MealImageUpdateWithWhereUniqueWithoutMealInput = {
    where: MealImageWhereUniqueInput
    data: XOR<MealImageUpdateWithoutMealInput, MealImageUncheckedUpdateWithoutMealInput>
  }

  export type MealImageUpdateManyWithWhereWithoutMealInput = {
    where: MealImageScalarWhereInput
    data: XOR<MealImageUpdateManyMutationInput, MealImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type MealImageScalarWhereInput = {
    AND?: Enumerable<MealImageScalarWhereInput>
    OR?: Enumerable<MealImageScalarWhereInput>
    NOT?: Enumerable<MealImageScalarWhereInput>
    id?: IntFilter | number
    price?: FloatFilter | number
    mealId?: IntFilter | number
  }

  export type VendorUpsertWithoutMealsInput = {
    update: XOR<VendorUpdateWithoutMealsInput, VendorUncheckedUpdateWithoutMealsInput>
    create: XOR<VendorCreateWithoutMealsInput, VendorUncheckedCreateWithoutMealsInput>
  }

  export type VendorUpdateWithoutMealsInput = {
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImages?: VendorImageUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImages?: VendorImageUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutCoverImagesInput = {
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    meals?: MealCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutCoverImagesInput = {
    id?: number
    pinCode: string
    brandName: string
    ownerName: string
    foodType?: VendorCreatefoodTypeInput | Enumerable<FoodType>
    email: string
    password: string
    salt: string
    phone: string
    address?: string | null
    isServiceAvailable?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    meals?: MealUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutCoverImagesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutCoverImagesInput, VendorUncheckedCreateWithoutCoverImagesInput>
  }

  export type VendorUpsertWithoutCoverImagesInput = {
    update: XOR<VendorUpdateWithoutCoverImagesInput, VendorUncheckedUpdateWithoutCoverImagesInput>
    create: XOR<VendorCreateWithoutCoverImagesInput, VendorUncheckedCreateWithoutCoverImagesInput>
  }

  export type VendorUpdateWithoutCoverImagesInput = {
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    meals?: MealUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutCoverImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    foodType?: VendorUpdatefoodTypeInput | Enumerable<FoodType>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type MealCreateWithoutImagesInput = {
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    vendor: VendorCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutImagesInput = {
    id?: number
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
    vendorId: number
  }

  export type MealCreateOrConnectWithoutImagesInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutImagesInput, MealUncheckedCreateWithoutImagesInput>
  }

  export type MealUpsertWithoutImagesInput = {
    update: XOR<MealUpdateWithoutImagesInput, MealUncheckedUpdateWithoutImagesInput>
    create: XOR<MealCreateWithoutImagesInput, MealUncheckedCreateWithoutImagesInput>
  }

  export type MealUpdateWithoutImagesInput = {
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    vendor?: VendorUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    vendorId?: IntFieldUpdateOperationsInput | number
  }

  export type VendorImageCreateManyVendorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealCreateManyVendorInput = {
    id?: number
    mealName: string
    rating?: number | null
    timeToBeReady: number
    category: FoodCategory
    type: FoodType
  }

  export type VendorImageUpdateWithoutVendorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorImageUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorImageUncheckedUpdateManyWithoutCoverImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUpdateWithoutVendorInput = {
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    images?: MealImageUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
    images?: MealImageUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealName?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    timeToBeReady?: IntFieldUpdateOperationsInput | number
    category?: EnumFoodCategoryFieldUpdateOperationsInput | FoodCategory
    type?: EnumFoodTypeFieldUpdateOperationsInput | FoodType
  }

  export type MealImageCreateManyMealInput = {
    id?: number
    price: number
  }

  export type MealImageUpdateWithoutMealInput = {
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MealImageUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MealImageUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}