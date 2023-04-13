
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
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: number
  vendorId: number
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const FoodType: {
  SNACKS: 'SNACKS',
  DESSERTS: 'DESSERTS',
  FRUITS: 'FRUITS',
  VEGETABLES: 'VEGETABLES',
  MEAT: 'MEAT'
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
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;
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
    Image: 'Image'
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
  }

  export type VendorCountOutputTypeSelect = {
    coverImages?: boolean
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
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
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
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
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
    coverImages?: boolean | Vendor$coverImagesArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }


  export type VendorInclude = {
    coverImages?: boolean | Vendor$coverImagesArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }

  export type VendorGetPayload<S extends boolean | null | undefined | VendorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Vendor :
    S extends undefined ? never :
    S extends { include: any } & (VendorArgs | VendorFindManyArgs)
    ? Vendor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coverImages' ? Array < ImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? VendorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VendorArgs | VendorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coverImages' ? Array < ImageGetPayload<S['select'][P]>>  :
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

    coverImages<T extends Vendor$coverImagesArgs= {}>(args?: Subset<T, Vendor$coverImagesArgs>): Prisma.PrismaPromise<Array<ImageGetPayload<T>>| Null>;

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
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
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
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    vendorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: ImageScalarFieldEnum[]
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: number
    vendorId: number
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Vendor?: boolean | VendorArgs
  }


  export type ImageInclude = {
    Vendor?: boolean | VendorArgs
  }

  export type ImageGetPayload<S extends boolean | null | undefined | ImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Image :
    S extends undefined ? never :
    S extends { include: any } & (ImageArgs | ImageFindManyArgs)
    ? Image  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Vendor' ? VendorGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImageArgs | ImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Vendor' ? VendorGetPayload<S['select'][P]> :  P extends keyof Image ? Image[P] : never
  } 
      : Image


  type ImageCountArgs = 
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? Prisma__ImageClient<ImageGetPayload<T>> : Prisma__ImageClient<ImageGetPayload<T> | null, null>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? Prisma__ImageClient<ImageGetPayload<T>> : Prisma__ImageClient<ImageGetPayload<T> | null, null>

    /**
     * Find the first Image that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): Prisma.PrismaPromise<Array<ImageGetPayload<T>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): Prisma__ImageClient<ImageGetPayload<T>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Image base type for findUnique actions
   */
  export type ImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUnique
   */
  export interface ImageFindUniqueArgs extends ImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image base type for findFirst actions
   */
  export type ImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }

  /**
   * Image findFirst
   */
  export interface ImageFindFirstArgs extends ImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    /**
     * The data used to create many Images.
     */
    data: Enumerable<ImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ImageScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


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
    updatedAt: 'updatedAt'
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
    coverImages?: ImageListRelationFilter
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
    coverImages?: ImageOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = {
    id?: number
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
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: IntFilter | number
    vendorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Vendor?: VendorOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = {
    id?: number
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    vendorId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
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
    coverImages?: ImageCreateNestedManyWithoutVendorInput
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
    coverImages?: ImageUncheckedCreateNestedManyWithoutVendorInput
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
    coverImages?: ImageUpdateManyWithoutVendorNestedInput
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
    coverImages?: ImageUncheckedUpdateManyWithoutVendorNestedInput
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
  }

  export type ImageCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Vendor: VendorCreateNestedOneWithoutCoverImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vendor?: VendorUpdateOneRequiredWithoutCoverImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: number
    vendorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
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
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type VendorRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorCreatefoodTypeInput = {
    set: Enumerable<FoodType>
  }

  export type ImageCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ImageCreateWithoutVendorInput>, Enumerable<ImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutVendorInput>
    createMany?: ImageCreateManyVendorInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type ImageUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ImageCreateWithoutVendorInput>, Enumerable<ImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutVendorInput>
    createMany?: ImageCreateManyVendorInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
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

  export type ImageUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutVendorInput>, Enumerable<ImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ImageCreateManyVendorInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutVendorInput>, Enumerable<ImageUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ImageCreateManyVendorInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
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

  export type ImageCreateWithoutVendorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutVendorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutVendorInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutVendorInput, ImageUncheckedCreateWithoutVendorInput>
  }

  export type ImageCreateManyVendorInputEnvelope = {
    data: Enumerable<ImageCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutVendorInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutVendorInput, ImageUncheckedUpdateWithoutVendorInput>
    create: XOR<ImageCreateWithoutVendorInput, ImageUncheckedCreateWithoutVendorInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutVendorInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutVendorInput, ImageUncheckedUpdateWithoutVendorInput>
  }

  export type ImageUpdateManyWithWhereWithoutVendorInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCoverImagesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    id?: IntFilter | number
    vendorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
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
  }

  export type ImageCreateManyVendorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutVendorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutCoverImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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