/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Article
 *
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>;
/**
 * Model Author
 *
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model CategoryOnArticle
 *
 */
export type CategoryOnArticle =
  $Result.DefaultSelection<Prisma.$CategoryOnArticlePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryOnArticle`: Exposes CRUD operations for the **CategoryOnArticle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CategoryOnArticles
   * const categoryOnArticles = await prisma.categoryOnArticle.findMany()
   * ```
   */
  get categoryOnArticle(): Prisma.CategoryOnArticleDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
    ? 'Please either choose `select` or `omit`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends bigint
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends boolean, B2 extends boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Article: 'Article';
    Author: 'Author';
    Category: 'Category';
    CategoryOnArticle: 'CategoryOnArticle';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'article' | 'author' | 'category' | 'categoryOnArticle';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>;
        fields: Prisma.ArticleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[];
          };
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>;
          };
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateArticle>;
          };
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ArticleGroupByOutputType>[];
          };
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>;
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number;
          };
        };
      };
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>;
        fields: Prisma.AuthorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuthor>;
          };
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuthorGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>;
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      CategoryOnArticle: {
        payload: Prisma.$CategoryOnArticlePayload<ExtArgs>;
        fields: Prisma.CategoryOnArticleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryOnArticleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryOnArticleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          findFirst: {
            args: Prisma.CategoryOnArticleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryOnArticleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          findMany: {
            args: Prisma.CategoryOnArticleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>[];
          };
          create: {
            args: Prisma.CategoryOnArticleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          createMany: {
            args: Prisma.CategoryOnArticleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryOnArticleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>[];
          };
          delete: {
            args: Prisma.CategoryOnArticleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          update: {
            args: Prisma.CategoryOnArticleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          deleteMany: {
            args: Prisma.CategoryOnArticleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryOnArticleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryOnArticleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>[];
          };
          upsert: {
            args: Prisma.CategoryOnArticleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryOnArticlePayload>;
          };
          aggregate: {
            args: Prisma.CategoryOnArticleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategoryOnArticle>;
          };
          groupBy: {
            args: Prisma.CategoryOnArticleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryOnArticleGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryOnArticleCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CategoryOnArticleCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    article?: ArticleOmit;
    author?: AuthorOmit;
    category?: CategoryOmit;
    categoryOnArticle?: CategoryOnArticleOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    categories: number;
  };

  export type ArticleCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | ArticleCountOutputTypeCountCategoriesArgs;
  };

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryOnArticleWhereInput;
  };

  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    articles: number;
  };

  export type AuthorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    articles?: boolean | AuthorCountOutputTypeCountArticlesArgs;
  };

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountArticlesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ArticleWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    articles: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    articles?: boolean | CategoryCountOutputTypeCountArticlesArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountArticlesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryOnArticleWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
  };

  export type ArticleAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
  };

  export type ArticleSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
  };

  export type ArticleMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    summary: string | null;
    coverImage: string | null;
    published: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
  };

  export type ArticleMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    summary: string | null;
    coverImage: string | null;
    published: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
  };

  export type ArticleCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    summary: number;
    coverImage: number;
    published: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    _all: number;
  };

  export type ArticleAvgAggregateInputType = {
    id?: true;
    authorId?: true;
  };

  export type ArticleSumAggregateInputType = {
    id?: true;
    authorId?: true;
  };

  export type ArticleMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    summary?: true;
    coverImage?: true;
    published?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
  };

  export type ArticleMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    summary?: true;
    coverImage?: true;
    published?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
  };

  export type ArticleCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    summary?: true;
    coverImage?: true;
    published?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    _all?: true;
  };

  export type ArticleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?:
      | ArticleOrderByWithRelationInput
      | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Articles
     **/
    _count?: true | ArticleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ArticleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ArticleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ArticleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ArticleMaxAggregateInputType;
  };

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
    [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>;
  };

  export type ArticleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ArticleWhereInput;
    orderBy?:
      | ArticleOrderByWithAggregationInput
      | ArticleOrderByWithAggregationInput[];
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum;
    having?: ArticleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleCountAggregateInputType | true;
    _avg?: ArticleAvgAggregateInputType;
    _sum?: ArticleSumAggregateInputType;
    _min?: ArticleMinAggregateInputType;
    _max?: ArticleMaxAggregateInputType;
  };

  export type ArticleGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    summary: string | null;
    coverImage: string | null;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    _count: ArticleCountAggregateOutputType | null;
    _avg: ArticleAvgAggregateOutputType | null;
    _sum: ArticleSumAggregateOutputType | null;
    _min: ArticleMinAggregateOutputType | null;
    _max: ArticleMaxAggregateOutputType | null;
  };

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ArticleGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ArticleGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>;
        }
      >
    >;

  export type ArticleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      summary?: boolean;
      coverImage?: boolean;
      published?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
      categories?: boolean | Article$categoriesArgs<ExtArgs>;
      _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['article']
  >;

  export type ArticleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      summary?: boolean;
      coverImage?: boolean;
      published?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['article']
  >;

  export type ArticleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      summary?: boolean;
      coverImage?: boolean;
      published?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['article']
  >;

  export type ArticleSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    summary?: boolean;
    coverImage?: boolean;
    published?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
  };

  export type ArticleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'content'
    | 'summary'
    | 'coverImage'
    | 'published'
    | 'createdAt'
    | 'updatedAt'
    | 'authorId',
    ExtArgs['result']['article']
  >;
  export type ArticleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
    categories?: boolean | Article$categoriesArgs<ExtArgs>;
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ArticleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
  };
  export type ArticleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
  };

  export type $ArticlePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Article';
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>;
      categories: Prisma.$CategoryOnArticlePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        content: string;
        summary: string | null;
        coverImage: string | null;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
      },
      ExtArgs['result']['article']
    >;
    composites: {};
  };

  type ArticleGetPayload<
    S extends boolean | null | undefined | ArticleDefaultArgs,
  > = $Result.GetResult<Prisma.$ArticlePayload, S>;

  type ArticleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArticleCountAggregateInputType | true;
  };

  export interface ArticleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Article'];
      meta: { name: 'Article' };
    };
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(
      args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(
      args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     *
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     *
     */
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     *
     */
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      $Result.GetResult<
        Prisma.$ArticlePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
     **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(
      args: Subset<T, ArticleAggregateArgs>,
    ): Prisma.PrismaPromise<GetArticleAggregateType<T>>;

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetArticleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Article model
     */
    readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AuthorDefaultArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      | $Result.GetResult<
          Prisma.$AuthorPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    categories<T extends Article$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Article$categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoryOnArticlePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<'Article', 'Int'>;
    readonly title: FieldRef<'Article', 'String'>;
    readonly content: FieldRef<'Article', 'String'>;
    readonly summary: FieldRef<'Article', 'String'>;
    readonly coverImage: FieldRef<'Article', 'String'>;
    readonly published: FieldRef<'Article', 'Boolean'>;
    readonly createdAt: FieldRef<'Article', 'DateTime'>;
    readonly updatedAt: FieldRef<'Article', 'DateTime'>;
    readonly authorId: FieldRef<'Article', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?:
      | ArticleOrderByWithRelationInput
      | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?:
      | ArticleOrderByWithRelationInput
      | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Articles to fetch.
     */
    orderBy?:
      | ArticleOrderByWithRelationInput
      | ArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Articles.
     */
    skip?: number;
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Article create
   */
  export type ArticleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>;
  };

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Article update
   */
  export type ArticleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>;
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>;
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to update.
     */
    limit?: number;
  };

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>;
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput;
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>;
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>;
  };

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput;
  };

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput;
    /**
     * Limit how many Articles to delete.
     */
    limit?: number;
  };

  /**
   * Article.categories
   */
  export type Article$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    where?: CategoryOnArticleWhereInput;
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    cursor?: CategoryOnArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | CategoryOnArticleScalarFieldEnum
      | CategoryOnArticleScalarFieldEnum[];
  };

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
  };

  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null;
    _avg: AuthorAvgAggregateOutputType | null;
    _sum: AuthorSumAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  export type AuthorAvgAggregateOutputType = {
    id: number | null;
  };

  export type AuthorSumAggregateOutputType = {
    id: number | null;
  };

  export type AuthorMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    bio: string | null;
    avatar: string | null;
  };

  export type AuthorMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    bio: string | null;
    avatar: string | null;
  };

  export type AuthorCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    bio: number;
    avatar: number;
    _all: number;
  };

  export type AuthorAvgAggregateInputType = {
    id?: true;
  };

  export type AuthorSumAggregateInputType = {
    id?: true;
  };

  export type AuthorMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    bio?: true;
    avatar?: true;
  };

  export type AuthorMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    bio?: true;
    avatar?: true;
  };

  export type AuthorCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    bio?: true;
    avatar?: true;
    _all?: true;
  };

  export type AuthorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authors
     **/
    _count?: true | AuthorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AuthorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AuthorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthorMaxAggregateInputType;
  };

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>;
  };

  export type AuthorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuthorWhereInput;
    orderBy?:
      | AuthorOrderByWithAggregationInput
      | AuthorOrderByWithAggregationInput[];
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum;
    having?: AuthorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthorCountAggregateInputType | true;
    _avg?: AuthorAvgAggregateInputType;
    _sum?: AuthorSumAggregateInputType;
    _min?: AuthorMinAggregateInputType;
    _max?: AuthorMaxAggregateInputType;
  };

  export type AuthorGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    bio: string | null;
    avatar: string | null;
    _count: AuthorCountAggregateOutputType | null;
    _avg: AuthorAvgAggregateOutputType | null;
    _sum: AuthorSumAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuthorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuthorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>;
        }
      >
    >;

  export type AuthorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      bio?: boolean;
      avatar?: boolean;
      articles?: boolean | Author$articlesArgs<ExtArgs>;
      _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      bio?: boolean;
      avatar?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      bio?: boolean;
      avatar?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    bio?: boolean;
    avatar?: boolean;
  };

  export type AuthorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'bio' | 'avatar',
    ExtArgs['result']['author']
  >;
  export type AuthorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    articles?: boolean | Author$articlesArgs<ExtArgs>;
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AuthorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AuthorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AuthorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Author';
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        bio: string | null;
        avatar: string | null;
      },
      ExtArgs['result']['author']
    >;
    composites: {};
  };

  type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorDefaultArgs,
  > = $Result.GetResult<Prisma.$AuthorPayload, S>;

  type AuthorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthorCountAggregateInputType | true;
  };

  export interface AuthorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Author'];
      meta: { name: 'Author' };
    };
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     *
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     *
     */
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     *
     */
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
     **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(
      args: Subset<T, AuthorAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuthorAggregateType<T>>;

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAuthorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Author model
     */
    readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    articles<T extends Author$articlesArgs<ExtArgs> = {}>(
      args?: Subset<T, Author$articlesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ArticlePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<'Author', 'Int'>;
    readonly name: FieldRef<'Author', 'String'>;
    readonly email: FieldRef<'Author', 'String'>;
    readonly bio: FieldRef<'Author', 'String'>;
    readonly avatar: FieldRef<'Author', 'String'>;
  }

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author create
   */
  export type AuthorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
  };

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author update
   */
  export type AuthorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput;
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
  };

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to delete.
     */
    limit?: number;
  };

  /**
   * Author.articles
   */
  export type Author$articlesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null;
    where?: ArticleWhereInput;
    orderBy?:
      | ArticleOrderByWithRelationInput
      | ArticleOrderByWithRelationInput[];
    cursor?: ArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[];
  };

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    id: number | null;
  };

  export type CategorySumAggregateOutputType = {
    id: number | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    id?: true;
  };

  export type CategorySumAggregateInputType = {
    id?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      articles?: boolean | Category$articlesArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'description',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    articles?: boolean | Category$articlesArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      articles: Prisma.$CategoryOnArticlePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        description: string | null;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    articles<T extends Category$articlesArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$articlesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoryOnArticlePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'Int'>;
    readonly name: FieldRef<'Category', 'String'>;
    readonly description: FieldRef<'Category', 'String'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.articles
   */
  export type Category$articlesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    where?: CategoryOnArticleWhereInput;
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    cursor?: CategoryOnArticleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | CategoryOnArticleScalarFieldEnum
      | CategoryOnArticleScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model CategoryOnArticle
   */

  export type AggregateCategoryOnArticle = {
    _count: CategoryOnArticleCountAggregateOutputType | null;
    _avg: CategoryOnArticleAvgAggregateOutputType | null;
    _sum: CategoryOnArticleSumAggregateOutputType | null;
    _min: CategoryOnArticleMinAggregateOutputType | null;
    _max: CategoryOnArticleMaxAggregateOutputType | null;
  };

  export type CategoryOnArticleAvgAggregateOutputType = {
    articleId: number | null;
    categoryId: number | null;
  };

  export type CategoryOnArticleSumAggregateOutputType = {
    articleId: number | null;
    categoryId: number | null;
  };

  export type CategoryOnArticleMinAggregateOutputType = {
    articleId: number | null;
    categoryId: number | null;
  };

  export type CategoryOnArticleMaxAggregateOutputType = {
    articleId: number | null;
    categoryId: number | null;
  };

  export type CategoryOnArticleCountAggregateOutputType = {
    articleId: number;
    categoryId: number;
    _all: number;
  };

  export type CategoryOnArticleAvgAggregateInputType = {
    articleId?: true;
    categoryId?: true;
  };

  export type CategoryOnArticleSumAggregateInputType = {
    articleId?: true;
    categoryId?: true;
  };

  export type CategoryOnArticleMinAggregateInputType = {
    articleId?: true;
    categoryId?: true;
  };

  export type CategoryOnArticleMaxAggregateInputType = {
    articleId?: true;
    categoryId?: true;
  };

  export type CategoryOnArticleCountAggregateInputType = {
    articleId?: true;
    categoryId?: true;
    _all?: true;
  };

  export type CategoryOnArticleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CategoryOnArticle to aggregate.
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryOnArticles to fetch.
     */
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryOnArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryOnArticles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryOnArticles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CategoryOnArticles
     **/
    _count?: true | CategoryOnArticleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryOnArticleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategoryOnArticleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryOnArticleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryOnArticleMaxAggregateInputType;
  };

  export type GetCategoryOnArticleAggregateType<
    T extends CategoryOnArticleAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCategoryOnArticle]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryOnArticle[P]>
      : GetScalarType<T[P], AggregateCategoryOnArticle[P]>;
  };

  export type CategoryOnArticleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryOnArticleWhereInput;
    orderBy?:
      | CategoryOnArticleOrderByWithAggregationInput
      | CategoryOnArticleOrderByWithAggregationInput[];
    by: CategoryOnArticleScalarFieldEnum[] | CategoryOnArticleScalarFieldEnum;
    having?: CategoryOnArticleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryOnArticleCountAggregateInputType | true;
    _avg?: CategoryOnArticleAvgAggregateInputType;
    _sum?: CategoryOnArticleSumAggregateInputType;
    _min?: CategoryOnArticleMinAggregateInputType;
    _max?: CategoryOnArticleMaxAggregateInputType;
  };

  export type CategoryOnArticleGroupByOutputType = {
    articleId: number;
    categoryId: number;
    _count: CategoryOnArticleCountAggregateOutputType | null;
    _avg: CategoryOnArticleAvgAggregateOutputType | null;
    _sum: CategoryOnArticleSumAggregateOutputType | null;
    _min: CategoryOnArticleMinAggregateOutputType | null;
    _max: CategoryOnArticleMaxAggregateOutputType | null;
  };

  type GetCategoryOnArticleGroupByPayload<
    T extends CategoryOnArticleGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryOnArticleGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof CategoryOnArticleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryOnArticleGroupByOutputType[P]>
          : GetScalarType<T[P], CategoryOnArticleGroupByOutputType[P]>;
      }
    >
  >;

  export type CategoryOnArticleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      articleId?: boolean;
      categoryId?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryOnArticle']
  >;

  export type CategoryOnArticleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      articleId?: boolean;
      categoryId?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryOnArticle']
  >;

  export type CategoryOnArticleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      articleId?: boolean;
      categoryId?: boolean;
      article?: boolean | ArticleDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryOnArticle']
  >;

  export type CategoryOnArticleSelectScalar = {
    articleId?: boolean;
    categoryId?: boolean;
  };

  export type CategoryOnArticleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'articleId' | 'categoryId',
    ExtArgs['result']['categoryOnArticle']
  >;
  export type CategoryOnArticleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type CategoryOnArticleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type CategoryOnArticleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $CategoryOnArticlePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CategoryOnArticle';
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>;
      category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        articleId: number;
        categoryId: number;
      },
      ExtArgs['result']['categoryOnArticle']
    >;
    composites: {};
  };

  type CategoryOnArticleGetPayload<
    S extends boolean | null | undefined | CategoryOnArticleDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryOnArticlePayload, S>;

  type CategoryOnArticleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CategoryOnArticleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoryOnArticleCountAggregateInputType | true;
  };

  export interface CategoryOnArticleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CategoryOnArticle'];
      meta: { name: 'CategoryOnArticle' };
    };
    /**
     * Find zero or one CategoryOnArticle that matches the filter.
     * @param {CategoryOnArticleFindUniqueArgs} args - Arguments to find a CategoryOnArticle
     * @example
     * // Get one CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryOnArticleFindUniqueArgs>(
      args: SelectSubset<T, CategoryOnArticleFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CategoryOnArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryOnArticleFindUniqueOrThrowArgs} args - Arguments to find a CategoryOnArticle
     * @example
     * // Get one CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryOnArticleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryOnArticleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CategoryOnArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleFindFirstArgs} args - Arguments to find a CategoryOnArticle
     * @example
     * // Get one CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryOnArticleFindFirstArgs>(
      args?: SelectSubset<T, CategoryOnArticleFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CategoryOnArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleFindFirstOrThrowArgs} args - Arguments to find a CategoryOnArticle
     * @example
     * // Get one CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryOnArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryOnArticleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CategoryOnArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryOnArticles
     * const categoryOnArticles = await prisma.categoryOnArticle.findMany()
     *
     * // Get first 10 CategoryOnArticles
     * const categoryOnArticles = await prisma.categoryOnArticle.findMany({ take: 10 })
     *
     * // Only select the `articleId`
     * const categoryOnArticleWithArticleIdOnly = await prisma.categoryOnArticle.findMany({ select: { articleId: true } })
     *
     */
    findMany<T extends CategoryOnArticleFindManyArgs>(
      args?: SelectSubset<T, CategoryOnArticleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CategoryOnArticle.
     * @param {CategoryOnArticleCreateArgs} args - Arguments to create a CategoryOnArticle.
     * @example
     * // Create one CategoryOnArticle
     * const CategoryOnArticle = await prisma.categoryOnArticle.create({
     *   data: {
     *     // ... data to create a CategoryOnArticle
     *   }
     * })
     *
     */
    create<T extends CategoryOnArticleCreateArgs>(
      args: SelectSubset<T, CategoryOnArticleCreateArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CategoryOnArticles.
     * @param {CategoryOnArticleCreateManyArgs} args - Arguments to create many CategoryOnArticles.
     * @example
     * // Create many CategoryOnArticles
     * const categoryOnArticle = await prisma.categoryOnArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryOnArticleCreateManyArgs>(
      args?: SelectSubset<T, CategoryOnArticleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CategoryOnArticles and returns the data saved in the database.
     * @param {CategoryOnArticleCreateManyAndReturnArgs} args - Arguments to create many CategoryOnArticles.
     * @example
     * // Create many CategoryOnArticles
     * const categoryOnArticle = await prisma.categoryOnArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CategoryOnArticles and only return the `articleId`
     * const categoryOnArticleWithArticleIdOnly = await prisma.categoryOnArticle.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryOnArticleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryOnArticleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CategoryOnArticle.
     * @param {CategoryOnArticleDeleteArgs} args - Arguments to delete one CategoryOnArticle.
     * @example
     * // Delete one CategoryOnArticle
     * const CategoryOnArticle = await prisma.categoryOnArticle.delete({
     *   where: {
     *     // ... filter to delete one CategoryOnArticle
     *   }
     * })
     *
     */
    delete<T extends CategoryOnArticleDeleteArgs>(
      args: SelectSubset<T, CategoryOnArticleDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CategoryOnArticle.
     * @param {CategoryOnArticleUpdateArgs} args - Arguments to update one CategoryOnArticle.
     * @example
     * // Update one CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryOnArticleUpdateArgs>(
      args: SelectSubset<T, CategoryOnArticleUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CategoryOnArticles.
     * @param {CategoryOnArticleDeleteManyArgs} args - Arguments to filter CategoryOnArticles to delete.
     * @example
     * // Delete a few CategoryOnArticles
     * const { count } = await prisma.categoryOnArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryOnArticleDeleteManyArgs>(
      args?: SelectSubset<T, CategoryOnArticleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CategoryOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryOnArticles
     * const categoryOnArticle = await prisma.categoryOnArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryOnArticleUpdateManyArgs>(
      args: SelectSubset<T, CategoryOnArticleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CategoryOnArticles and returns the data updated in the database.
     * @param {CategoryOnArticleUpdateManyAndReturnArgs} args - Arguments to update many CategoryOnArticles.
     * @example
     * // Update many CategoryOnArticles
     * const categoryOnArticle = await prisma.categoryOnArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CategoryOnArticles and only return the `articleId`
     * const categoryOnArticleWithArticleIdOnly = await prisma.categoryOnArticle.updateManyAndReturn({
     *   select: { articleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryOnArticleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryOnArticleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CategoryOnArticle.
     * @param {CategoryOnArticleUpsertArgs} args - Arguments to update or create a CategoryOnArticle.
     * @example
     * // Update or create a CategoryOnArticle
     * const categoryOnArticle = await prisma.categoryOnArticle.upsert({
     *   create: {
     *     // ... data to create a CategoryOnArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryOnArticle we want to update
     *   }
     * })
     */
    upsert<T extends CategoryOnArticleUpsertArgs>(
      args: SelectSubset<T, CategoryOnArticleUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryOnArticleClient<
      $Result.GetResult<
        Prisma.$CategoryOnArticlePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CategoryOnArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleCountArgs} args - Arguments to filter CategoryOnArticles to count.
     * @example
     * // Count the number of CategoryOnArticles
     * const count = await prisma.categoryOnArticle.count({
     *   where: {
     *     // ... the filter for the CategoryOnArticles we want to count
     *   }
     * })
     **/
    count<T extends CategoryOnArticleCountArgs>(
      args?: Subset<T, CategoryOnArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              CategoryOnArticleCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CategoryOnArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryOnArticleAggregateArgs>(
      args: Subset<T, CategoryOnArticleAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryOnArticleAggregateType<T>>;

    /**
     * Group by CategoryOnArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnArticleGroupByArgs} args - Group by arguments.
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
      T extends CategoryOnArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryOnArticleGroupByArgs['orderBy'] }
        : { orderBy?: CategoryOnArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryOnArticleGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryOnArticleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CategoryOnArticle model
     */
    readonly fields: CategoryOnArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryOnArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryOnArticleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ArticleDefaultArgs<ExtArgs>>,
    ): Prisma__ArticleClient<
      | $Result.GetResult<
          Prisma.$ArticlePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CategoryOnArticle model
   */
  interface CategoryOnArticleFieldRefs {
    readonly articleId: FieldRef<'CategoryOnArticle', 'Int'>;
    readonly categoryId: FieldRef<'CategoryOnArticle', 'Int'>;
  }

  // Custom InputTypes
  /**
   * CategoryOnArticle findUnique
   */
  export type CategoryOnArticleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryOnArticle to fetch.
     */
    where: CategoryOnArticleWhereUniqueInput;
  };

  /**
   * CategoryOnArticle findUniqueOrThrow
   */
  export type CategoryOnArticleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryOnArticle to fetch.
     */
    where: CategoryOnArticleWhereUniqueInput;
  };

  /**
   * CategoryOnArticle findFirst
   */
  export type CategoryOnArticleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryOnArticle to fetch.
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryOnArticles to fetch.
     */
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategoryOnArticles.
     */
    cursor?: CategoryOnArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryOnArticles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryOnArticles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategoryOnArticles.
     */
    distinct?:
      | CategoryOnArticleScalarFieldEnum
      | CategoryOnArticleScalarFieldEnum[];
  };

  /**
   * CategoryOnArticle findFirstOrThrow
   */
  export type CategoryOnArticleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryOnArticle to fetch.
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryOnArticles to fetch.
     */
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategoryOnArticles.
     */
    cursor?: CategoryOnArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryOnArticles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryOnArticles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategoryOnArticles.
     */
    distinct?:
      | CategoryOnArticleScalarFieldEnum
      | CategoryOnArticleScalarFieldEnum[];
  };

  /**
   * CategoryOnArticle findMany
   */
  export type CategoryOnArticleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryOnArticles to fetch.
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryOnArticles to fetch.
     */
    orderBy?:
      | CategoryOnArticleOrderByWithRelationInput
      | CategoryOnArticleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CategoryOnArticles.
     */
    cursor?: CategoryOnArticleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryOnArticles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryOnArticles.
     */
    skip?: number;
    distinct?:
      | CategoryOnArticleScalarFieldEnum
      | CategoryOnArticleScalarFieldEnum[];
  };

  /**
   * CategoryOnArticle create
   */
  export type CategoryOnArticleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * The data needed to create a CategoryOnArticle.
     */
    data: XOR<
      CategoryOnArticleCreateInput,
      CategoryOnArticleUncheckedCreateInput
    >;
  };

  /**
   * CategoryOnArticle createMany
   */
  export type CategoryOnArticleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CategoryOnArticles.
     */
    data: CategoryOnArticleCreateManyInput | CategoryOnArticleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CategoryOnArticle createManyAndReturn
   */
  export type CategoryOnArticleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * The data used to create many CategoryOnArticles.
     */
    data: CategoryOnArticleCreateManyInput | CategoryOnArticleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CategoryOnArticle update
   */
  export type CategoryOnArticleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * The data needed to update a CategoryOnArticle.
     */
    data: XOR<
      CategoryOnArticleUpdateInput,
      CategoryOnArticleUncheckedUpdateInput
    >;
    /**
     * Choose, which CategoryOnArticle to update.
     */
    where: CategoryOnArticleWhereUniqueInput;
  };

  /**
   * CategoryOnArticle updateMany
   */
  export type CategoryOnArticleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CategoryOnArticles.
     */
    data: XOR<
      CategoryOnArticleUpdateManyMutationInput,
      CategoryOnArticleUncheckedUpdateManyInput
    >;
    /**
     * Filter which CategoryOnArticles to update
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * Limit how many CategoryOnArticles to update.
     */
    limit?: number;
  };

  /**
   * CategoryOnArticle updateManyAndReturn
   */
  export type CategoryOnArticleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * The data used to update CategoryOnArticles.
     */
    data: XOR<
      CategoryOnArticleUpdateManyMutationInput,
      CategoryOnArticleUncheckedUpdateManyInput
    >;
    /**
     * Filter which CategoryOnArticles to update
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * Limit how many CategoryOnArticles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CategoryOnArticle upsert
   */
  export type CategoryOnArticleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * The filter to search for the CategoryOnArticle to update in case it exists.
     */
    where: CategoryOnArticleWhereUniqueInput;
    /**
     * In case the CategoryOnArticle found by the `where` argument doesn't exist, create a new CategoryOnArticle with this data.
     */
    create: XOR<
      CategoryOnArticleCreateInput,
      CategoryOnArticleUncheckedCreateInput
    >;
    /**
     * In case the CategoryOnArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CategoryOnArticleUpdateInput,
      CategoryOnArticleUncheckedUpdateInput
    >;
  };

  /**
   * CategoryOnArticle delete
   */
  export type CategoryOnArticleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
    /**
     * Filter which CategoryOnArticle to delete.
     */
    where: CategoryOnArticleWhereUniqueInput;
  };

  /**
   * CategoryOnArticle deleteMany
   */
  export type CategoryOnArticleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CategoryOnArticles to delete
     */
    where?: CategoryOnArticleWhereInput;
    /**
     * Limit how many CategoryOnArticles to delete.
     */
    limit?: number;
  };

  /**
   * CategoryOnArticle without action
   */
  export type CategoryOnArticleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryOnArticle
     */
    select?: CategoryOnArticleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryOnArticle
     */
    omit?: CategoryOnArticleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnArticleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ArticleScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    summary: 'summary';
    coverImage: 'coverImage';
    published: 'published';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    authorId: 'authorId';
  };

  export type ArticleScalarFieldEnum =
    (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];

  export const AuthorScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    bio: 'bio';
    avatar: 'avatar';
  };

  export type AuthorScalarFieldEnum =
    (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const CategoryOnArticleScalarFieldEnum: {
    articleId: 'articleId';
    categoryId: 'categoryId';
  };

  export type CategoryOnArticleScalarFieldEnum =
    (typeof CategoryOnArticleScalarFieldEnum)[keyof typeof CategoryOnArticleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[];
    OR?: ArticleWhereInput[];
    NOT?: ArticleWhereInput | ArticleWhereInput[];
    id?: IntFilter<'Article'> | number;
    title?: StringFilter<'Article'> | string;
    content?: StringFilter<'Article'> | string;
    summary?: StringNullableFilter<'Article'> | string | null;
    coverImage?: StringNullableFilter<'Article'> | string | null;
    published?: BoolFilter<'Article'> | boolean;
    createdAt?: DateTimeFilter<'Article'> | Date | string;
    updatedAt?: DateTimeFilter<'Article'> | Date | string;
    authorId?: IntFilter<'Article'> | number;
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
    categories?: CategoryOnArticleListRelationFilter;
  };

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    summary?: SortOrderInput | SortOrder;
    coverImage?: SortOrderInput | SortOrder;
    published?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    author?: AuthorOrderByWithRelationInput;
    categories?: CategoryOnArticleOrderByRelationAggregateInput;
  };

  export type ArticleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ArticleWhereInput | ArticleWhereInput[];
      OR?: ArticleWhereInput[];
      NOT?: ArticleWhereInput | ArticleWhereInput[];
      title?: StringFilter<'Article'> | string;
      content?: StringFilter<'Article'> | string;
      summary?: StringNullableFilter<'Article'> | string | null;
      coverImage?: StringNullableFilter<'Article'> | string | null;
      published?: BoolFilter<'Article'> | boolean;
      createdAt?: DateTimeFilter<'Article'> | Date | string;
      updatedAt?: DateTimeFilter<'Article'> | Date | string;
      authorId?: IntFilter<'Article'> | number;
      author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
      categories?: CategoryOnArticleListRelationFilter;
    },
    'id'
  >;

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    summary?: SortOrderInput | SortOrder;
    coverImage?: SortOrderInput | SortOrder;
    published?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    _count?: ArticleCountOrderByAggregateInput;
    _avg?: ArticleAvgOrderByAggregateInput;
    _max?: ArticleMaxOrderByAggregateInput;
    _min?: ArticleMinOrderByAggregateInput;
    _sum?: ArticleSumOrderByAggregateInput;
  };

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?:
      | ArticleScalarWhereWithAggregatesInput
      | ArticleScalarWhereWithAggregatesInput[];
    OR?: ArticleScalarWhereWithAggregatesInput[];
    NOT?:
      | ArticleScalarWhereWithAggregatesInput
      | ArticleScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Article'> | number;
    title?: StringWithAggregatesFilter<'Article'> | string;
    content?: StringWithAggregatesFilter<'Article'> | string;
    summary?: StringNullableWithAggregatesFilter<'Article'> | string | null;
    coverImage?: StringNullableWithAggregatesFilter<'Article'> | string | null;
    published?: BoolWithAggregatesFilter<'Article'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Article'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Article'> | Date | string;
    authorId?: IntWithAggregatesFilter<'Article'> | number;
  };

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[];
    OR?: AuthorWhereInput[];
    NOT?: AuthorWhereInput | AuthorWhereInput[];
    id?: IntFilter<'Author'> | number;
    name?: StringFilter<'Author'> | string;
    email?: StringFilter<'Author'> | string;
    bio?: StringNullableFilter<'Author'> | string | null;
    avatar?: StringNullableFilter<'Author'> | string | null;
    articles?: ArticleListRelationFilter;
  };

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    articles?: ArticleOrderByRelationAggregateInput;
  };

  export type AuthorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: AuthorWhereInput | AuthorWhereInput[];
      OR?: AuthorWhereInput[];
      NOT?: AuthorWhereInput | AuthorWhereInput[];
      name?: StringFilter<'Author'> | string;
      bio?: StringNullableFilter<'Author'> | string | null;
      avatar?: StringNullableFilter<'Author'> | string | null;
      articles?: ArticleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    _count?: AuthorCountOrderByAggregateInput;
    _avg?: AuthorAvgOrderByAggregateInput;
    _max?: AuthorMaxOrderByAggregateInput;
    _min?: AuthorMinOrderByAggregateInput;
    _sum?: AuthorSumOrderByAggregateInput;
  };

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    OR?: AuthorScalarWhereWithAggregatesInput[];
    NOT?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Author'> | number;
    name?: StringWithAggregatesFilter<'Author'> | string;
    email?: StringWithAggregatesFilter<'Author'> | string;
    bio?: StringNullableWithAggregatesFilter<'Author'> | string | null;
    avatar?: StringNullableWithAggregatesFilter<'Author'> | string | null;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: IntFilter<'Category'> | number;
    name?: StringFilter<'Category'> | string;
    description?: StringNullableFilter<'Category'> | string | null;
    articles?: CategoryOnArticleListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    articles?: CategoryOnArticleOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      description?: StringNullableFilter<'Category'> | string | null;
      articles?: CategoryOnArticleListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Category'> | number;
    name?: StringWithAggregatesFilter<'Category'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'Category'>
      | string
      | null;
  };

  export type CategoryOnArticleWhereInput = {
    AND?: CategoryOnArticleWhereInput | CategoryOnArticleWhereInput[];
    OR?: CategoryOnArticleWhereInput[];
    NOT?: CategoryOnArticleWhereInput | CategoryOnArticleWhereInput[];
    articleId?: IntFilter<'CategoryOnArticle'> | number;
    categoryId?: IntFilter<'CategoryOnArticle'> | number;
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
  };

  export type CategoryOnArticleOrderByWithRelationInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
    article?: ArticleOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
  };

  export type CategoryOnArticleWhereUniqueInput = Prisma.AtLeast<
    {
      articleId_categoryId?: CategoryOnArticleArticleIdCategoryIdCompoundUniqueInput;
      AND?: CategoryOnArticleWhereInput | CategoryOnArticleWhereInput[];
      OR?: CategoryOnArticleWhereInput[];
      NOT?: CategoryOnArticleWhereInput | CategoryOnArticleWhereInput[];
      articleId?: IntFilter<'CategoryOnArticle'> | number;
      categoryId?: IntFilter<'CategoryOnArticle'> | number;
      article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    },
    'articleId_categoryId'
  >;

  export type CategoryOnArticleOrderByWithAggregationInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
    _count?: CategoryOnArticleCountOrderByAggregateInput;
    _avg?: CategoryOnArticleAvgOrderByAggregateInput;
    _max?: CategoryOnArticleMaxOrderByAggregateInput;
    _min?: CategoryOnArticleMinOrderByAggregateInput;
    _sum?: CategoryOnArticleSumOrderByAggregateInput;
  };

  export type CategoryOnArticleScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryOnArticleScalarWhereWithAggregatesInput
      | CategoryOnArticleScalarWhereWithAggregatesInput[];
    OR?: CategoryOnArticleScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryOnArticleScalarWhereWithAggregatesInput
      | CategoryOnArticleScalarWhereWithAggregatesInput[];
    articleId?: IntWithAggregatesFilter<'CategoryOnArticle'> | number;
    categoryId?: IntWithAggregatesFilter<'CategoryOnArticle'> | number;
  };

  export type ArticleCreateInput = {
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: AuthorCreateNestedOneWithoutArticlesInput;
    categories?: CategoryOnArticleCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    categories?: CategoryOnArticleUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: AuthorUpdateOneRequiredWithoutArticlesNestedInput;
    categories?: CategoryOnArticleUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    categories?: CategoryOnArticleUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
  };

  export type ArticleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type AuthorCreateInput = {
    name: string;
    email: string;
    bio?: string | null;
    avatar?: string | null;
    articles?: ArticleCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    bio?: string | null;
    avatar?: string | null;
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    articles?: ArticleUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    bio?: string | null;
    avatar?: string | null;
  };

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryCreateInput = {
    name: string;
    description?: string | null;
    articles?: CategoryOnArticleCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    articles?: CategoryOnArticleUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    articles?: CategoryOnArticleUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    articles?: CategoryOnArticleUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
  };

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryOnArticleCreateInput = {
    article: ArticleCreateNestedOneWithoutCategoriesInput;
    category: CategoryCreateNestedOneWithoutArticlesInput;
  };

  export type CategoryOnArticleUncheckedCreateInput = {
    articleId: number;
    categoryId: number;
  };

  export type CategoryOnArticleUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutCategoriesNestedInput;
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
  };

  export type CategoryOnArticleUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number;
    categoryId?: IntFieldUpdateOperationsInput | number;
  };

  export type CategoryOnArticleCreateManyInput = {
    articleId: number;
    categoryId: number;
  };

  export type CategoryOnArticleUpdateManyMutationInput = {};

  export type CategoryOnArticleUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number;
    categoryId?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput;
    isNot?: AuthorWhereInput;
  };

  export type CategoryOnArticleListRelationFilter = {
    every?: CategoryOnArticleWhereInput;
    some?: CategoryOnArticleWhereInput;
    none?: CategoryOnArticleWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CategoryOnArticleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    summary?: SortOrder;
    coverImage?: SortOrder;
    published?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
  };

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
  };

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    summary?: SortOrder;
    coverImage?: SortOrder;
    published?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
  };

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    summary?: SortOrder;
    coverImage?: SortOrder;
    published?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
  };

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput;
    some?: ArticleWhereInput;
    none?: ArticleWhereInput;
  };

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    bio?: SortOrder;
    avatar?: SortOrder;
  };

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    bio?: SortOrder;
    avatar?: SortOrder;
  };

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    bio?: SortOrder;
    avatar?: SortOrder;
  };

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput;
    isNot?: ArticleWhereInput;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type CategoryOnArticleArticleIdCategoryIdCompoundUniqueInput = {
    articleId: number;
    categoryId: number;
  };

  export type CategoryOnArticleCountOrderByAggregateInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type CategoryOnArticleAvgOrderByAggregateInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type CategoryOnArticleMaxOrderByAggregateInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type CategoryOnArticleMinOrderByAggregateInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type CategoryOnArticleSumOrderByAggregateInput = {
    articleId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type AuthorCreateNestedOneWithoutArticlesInput = {
    create?: XOR<
      AuthorCreateWithoutArticlesInput,
      AuthorUncheckedCreateWithoutArticlesInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutArticlesInput;
    connect?: AuthorWhereUniqueInput;
  };

  export type CategoryOnArticleCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutArticleInput,
          CategoryOnArticleUncheckedCreateWithoutArticleInput
        >
      | CategoryOnArticleCreateWithoutArticleInput[]
      | CategoryOnArticleUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutArticleInput
      | CategoryOnArticleCreateOrConnectWithoutArticleInput[];
    createMany?: CategoryOnArticleCreateManyArticleInputEnvelope;
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
  };

  export type CategoryOnArticleUncheckedCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutArticleInput,
          CategoryOnArticleUncheckedCreateWithoutArticleInput
        >
      | CategoryOnArticleCreateWithoutArticleInput[]
      | CategoryOnArticleUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutArticleInput
      | CategoryOnArticleCreateOrConnectWithoutArticleInput[];
    createMany?: CategoryOnArticleCreateManyArticleInputEnvelope;
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type AuthorUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<
      AuthorCreateWithoutArticlesInput,
      AuthorUncheckedCreateWithoutArticlesInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutArticlesInput;
    upsert?: AuthorUpsertWithoutArticlesInput;
    connect?: AuthorWhereUniqueInput;
    update?: XOR<
      XOR<
        AuthorUpdateToOneWithWhereWithoutArticlesInput,
        AuthorUpdateWithoutArticlesInput
      >,
      AuthorUncheckedUpdateWithoutArticlesInput
    >;
  };

  export type CategoryOnArticleUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutArticleInput,
          CategoryOnArticleUncheckedCreateWithoutArticleInput
        >
      | CategoryOnArticleCreateWithoutArticleInput[]
      | CategoryOnArticleUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutArticleInput
      | CategoryOnArticleCreateOrConnectWithoutArticleInput[];
    upsert?:
      | CategoryOnArticleUpsertWithWhereUniqueWithoutArticleInput
      | CategoryOnArticleUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: CategoryOnArticleCreateManyArticleInputEnvelope;
    set?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    disconnect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    delete?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    update?:
      | CategoryOnArticleUpdateWithWhereUniqueWithoutArticleInput
      | CategoryOnArticleUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | CategoryOnArticleUpdateManyWithWhereWithoutArticleInput
      | CategoryOnArticleUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CategoryOnArticleUncheckedUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutArticleInput,
          CategoryOnArticleUncheckedCreateWithoutArticleInput
        >
      | CategoryOnArticleCreateWithoutArticleInput[]
      | CategoryOnArticleUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutArticleInput
      | CategoryOnArticleCreateOrConnectWithoutArticleInput[];
    upsert?:
      | CategoryOnArticleUpsertWithWhereUniqueWithoutArticleInput
      | CategoryOnArticleUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: CategoryOnArticleCreateManyArticleInputEnvelope;
    set?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    disconnect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    delete?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    update?:
      | CategoryOnArticleUpdateWithWhereUniqueWithoutArticleInput
      | CategoryOnArticleUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | CategoryOnArticleUpdateManyWithWhereWithoutArticleInput
      | CategoryOnArticleUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
  };

  export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          ArticleCreateWithoutAuthorInput,
          ArticleUncheckedCreateWithoutAuthorInput
        >
      | ArticleCreateWithoutAuthorInput[]
      | ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | ArticleCreateOrConnectWithoutAuthorInput
      | ArticleCreateOrConnectWithoutAuthorInput[];
    createMany?: ArticleCreateManyAuthorInputEnvelope;
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
  };

  export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          ArticleCreateWithoutAuthorInput,
          ArticleUncheckedCreateWithoutAuthorInput
        >
      | ArticleCreateWithoutAuthorInput[]
      | ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | ArticleCreateOrConnectWithoutAuthorInput
      | ArticleCreateOrConnectWithoutAuthorInput[];
    createMany?: ArticleCreateManyAuthorInputEnvelope;
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
  };

  export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          ArticleCreateWithoutAuthorInput,
          ArticleUncheckedCreateWithoutAuthorInput
        >
      | ArticleCreateWithoutAuthorInput[]
      | ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | ArticleCreateOrConnectWithoutAuthorInput
      | ArticleCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | ArticleUpsertWithWhereUniqueWithoutAuthorInput
      | ArticleUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: ArticleCreateManyAuthorInputEnvelope;
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    update?:
      | ArticleUpdateWithWhereUniqueWithoutAuthorInput
      | ArticleUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | ArticleUpdateManyWithWhereWithoutAuthorInput
      | ArticleUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
  };

  export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          ArticleCreateWithoutAuthorInput,
          ArticleUncheckedCreateWithoutAuthorInput
        >
      | ArticleCreateWithoutAuthorInput[]
      | ArticleUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | ArticleCreateOrConnectWithoutAuthorInput
      | ArticleCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | ArticleUpsertWithWhereUniqueWithoutAuthorInput
      | ArticleUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: ArticleCreateManyAuthorInputEnvelope;
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[];
    update?:
      | ArticleUpdateWithWhereUniqueWithoutAuthorInput
      | ArticleUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | ArticleUpdateManyWithWhereWithoutAuthorInput
      | ArticleUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
  };

  export type CategoryOnArticleCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutCategoryInput,
          CategoryOnArticleUncheckedCreateWithoutCategoryInput
        >
      | CategoryOnArticleCreateWithoutCategoryInput[]
      | CategoryOnArticleUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput[];
    createMany?: CategoryOnArticleCreateManyCategoryInputEnvelope;
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
  };

  export type CategoryOnArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutCategoryInput,
          CategoryOnArticleUncheckedCreateWithoutCategoryInput
        >
      | CategoryOnArticleCreateWithoutCategoryInput[]
      | CategoryOnArticleUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput[];
    createMany?: CategoryOnArticleCreateManyCategoryInputEnvelope;
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
  };

  export type CategoryOnArticleUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutCategoryInput,
          CategoryOnArticleUncheckedCreateWithoutCategoryInput
        >
      | CategoryOnArticleCreateWithoutCategoryInput[]
      | CategoryOnArticleUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CategoryOnArticleUpsertWithWhereUniqueWithoutCategoryInput
      | CategoryOnArticleUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CategoryOnArticleCreateManyCategoryInputEnvelope;
    set?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    disconnect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    delete?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    update?:
      | CategoryOnArticleUpdateWithWhereUniqueWithoutCategoryInput
      | CategoryOnArticleUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CategoryOnArticleUpdateManyWithWhereWithoutCategoryInput
      | CategoryOnArticleUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
  };

  export type CategoryOnArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CategoryOnArticleCreateWithoutCategoryInput,
          CategoryOnArticleUncheckedCreateWithoutCategoryInput
        >
      | CategoryOnArticleCreateWithoutCategoryInput[]
      | CategoryOnArticleUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput
      | CategoryOnArticleCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CategoryOnArticleUpsertWithWhereUniqueWithoutCategoryInput
      | CategoryOnArticleUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CategoryOnArticleCreateManyCategoryInputEnvelope;
    set?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    disconnect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    delete?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    connect?:
      | CategoryOnArticleWhereUniqueInput
      | CategoryOnArticleWhereUniqueInput[];
    update?:
      | CategoryOnArticleUpdateWithWhereUniqueWithoutCategoryInput
      | CategoryOnArticleUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CategoryOnArticleUpdateManyWithWhereWithoutCategoryInput
      | CategoryOnArticleUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
  };

  export type ArticleCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<
      ArticleCreateWithoutCategoriesInput,
      ArticleUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput;
    connect?: ArticleWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<
      CategoryCreateWithoutArticlesInput,
      CategoryUncheckedCreateWithoutArticlesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type ArticleUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<
      ArticleCreateWithoutCategoriesInput,
      ArticleUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoriesInput;
    upsert?: ArticleUpsertWithoutCategoriesInput;
    connect?: ArticleWhereUniqueInput;
    update?: XOR<
      XOR<
        ArticleUpdateToOneWithWhereWithoutCategoriesInput,
        ArticleUpdateWithoutCategoriesInput
      >,
      ArticleUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type CategoryUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<
      CategoryCreateWithoutArticlesInput,
      CategoryUncheckedCreateWithoutArticlesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput;
    upsert?: CategoryUpsertWithoutArticlesInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutArticlesInput,
        CategoryUpdateWithoutArticlesInput
      >,
      CategoryUncheckedUpdateWithoutArticlesInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type AuthorCreateWithoutArticlesInput = {
    name: string;
    email: string;
    bio?: string | null;
    avatar?: string | null;
  };

  export type AuthorUncheckedCreateWithoutArticlesInput = {
    id?: number;
    name: string;
    email: string;
    bio?: string | null;
    avatar?: string | null;
  };

  export type AuthorCreateOrConnectWithoutArticlesInput = {
    where: AuthorWhereUniqueInput;
    create: XOR<
      AuthorCreateWithoutArticlesInput,
      AuthorUncheckedCreateWithoutArticlesInput
    >;
  };

  export type CategoryOnArticleCreateWithoutArticleInput = {
    category: CategoryCreateNestedOneWithoutArticlesInput;
  };

  export type CategoryOnArticleUncheckedCreateWithoutArticleInput = {
    categoryId: number;
  };

  export type CategoryOnArticleCreateOrConnectWithoutArticleInput = {
    where: CategoryOnArticleWhereUniqueInput;
    create: XOR<
      CategoryOnArticleCreateWithoutArticleInput,
      CategoryOnArticleUncheckedCreateWithoutArticleInput
    >;
  };

  export type CategoryOnArticleCreateManyArticleInputEnvelope = {
    data:
      | CategoryOnArticleCreateManyArticleInput
      | CategoryOnArticleCreateManyArticleInput[];
    skipDuplicates?: boolean;
  };

  export type AuthorUpsertWithoutArticlesInput = {
    update: XOR<
      AuthorUpdateWithoutArticlesInput,
      AuthorUncheckedUpdateWithoutArticlesInput
    >;
    create: XOR<
      AuthorCreateWithoutArticlesInput,
      AuthorUncheckedCreateWithoutArticlesInput
    >;
    where?: AuthorWhereInput;
  };

  export type AuthorUpdateToOneWithWhereWithoutArticlesInput = {
    where?: AuthorWhereInput;
    data: XOR<
      AuthorUpdateWithoutArticlesInput,
      AuthorUncheckedUpdateWithoutArticlesInput
    >;
  };

  export type AuthorUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryOnArticleUpsertWithWhereUniqueWithoutArticleInput = {
    where: CategoryOnArticleWhereUniqueInput;
    update: XOR<
      CategoryOnArticleUpdateWithoutArticleInput,
      CategoryOnArticleUncheckedUpdateWithoutArticleInput
    >;
    create: XOR<
      CategoryOnArticleCreateWithoutArticleInput,
      CategoryOnArticleUncheckedCreateWithoutArticleInput
    >;
  };

  export type CategoryOnArticleUpdateWithWhereUniqueWithoutArticleInput = {
    where: CategoryOnArticleWhereUniqueInput;
    data: XOR<
      CategoryOnArticleUpdateWithoutArticleInput,
      CategoryOnArticleUncheckedUpdateWithoutArticleInput
    >;
  };

  export type CategoryOnArticleUpdateManyWithWhereWithoutArticleInput = {
    where: CategoryOnArticleScalarWhereInput;
    data: XOR<
      CategoryOnArticleUpdateManyMutationInput,
      CategoryOnArticleUncheckedUpdateManyWithoutArticleInput
    >;
  };

  export type CategoryOnArticleScalarWhereInput = {
    AND?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
    OR?: CategoryOnArticleScalarWhereInput[];
    NOT?:
      | CategoryOnArticleScalarWhereInput
      | CategoryOnArticleScalarWhereInput[];
    articleId?: IntFilter<'CategoryOnArticle'> | number;
    categoryId?: IntFilter<'CategoryOnArticle'> | number;
  };

  export type ArticleCreateWithoutAuthorInput = {
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: CategoryOnArticleCreateNestedManyWithoutArticleInput;
  };

  export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: number;
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: CategoryOnArticleUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: ArticleWhereUniqueInput;
    create: XOR<
      ArticleCreateWithoutAuthorInput,
      ArticleUncheckedCreateWithoutAuthorInput
    >;
  };

  export type ArticleCreateManyAuthorInputEnvelope = {
    data: ArticleCreateManyAuthorInput | ArticleCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput;
    update: XOR<
      ArticleUpdateWithoutAuthorInput,
      ArticleUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      ArticleCreateWithoutAuthorInput,
      ArticleUncheckedCreateWithoutAuthorInput
    >;
  };

  export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput;
    data: XOR<
      ArticleUpdateWithoutAuthorInput,
      ArticleUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticleScalarWhereInput;
    data: XOR<
      ArticleUpdateManyMutationInput,
      ArticleUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
    OR?: ArticleScalarWhereInput[];
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[];
    id?: IntFilter<'Article'> | number;
    title?: StringFilter<'Article'> | string;
    content?: StringFilter<'Article'> | string;
    summary?: StringNullableFilter<'Article'> | string | null;
    coverImage?: StringNullableFilter<'Article'> | string | null;
    published?: BoolFilter<'Article'> | boolean;
    createdAt?: DateTimeFilter<'Article'> | Date | string;
    updatedAt?: DateTimeFilter<'Article'> | Date | string;
    authorId?: IntFilter<'Article'> | number;
  };

  export type CategoryOnArticleCreateWithoutCategoryInput = {
    article: ArticleCreateNestedOneWithoutCategoriesInput;
  };

  export type CategoryOnArticleUncheckedCreateWithoutCategoryInput = {
    articleId: number;
  };

  export type CategoryOnArticleCreateOrConnectWithoutCategoryInput = {
    where: CategoryOnArticleWhereUniqueInput;
    create: XOR<
      CategoryOnArticleCreateWithoutCategoryInput,
      CategoryOnArticleUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CategoryOnArticleCreateManyCategoryInputEnvelope = {
    data:
      | CategoryOnArticleCreateManyCategoryInput
      | CategoryOnArticleCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryOnArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnArticleWhereUniqueInput;
    update: XOR<
      CategoryOnArticleUpdateWithoutCategoryInput,
      CategoryOnArticleUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      CategoryOnArticleCreateWithoutCategoryInput,
      CategoryOnArticleUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CategoryOnArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnArticleWhereUniqueInput;
    data: XOR<
      CategoryOnArticleUpdateWithoutCategoryInput,
      CategoryOnArticleUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type CategoryOnArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryOnArticleScalarWhereInput;
    data: XOR<
      CategoryOnArticleUpdateManyMutationInput,
      CategoryOnArticleUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type ArticleCreateWithoutCategoriesInput = {
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: AuthorCreateNestedOneWithoutArticlesInput;
  };

  export type ArticleUncheckedCreateWithoutCategoriesInput = {
    id?: number;
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
  };

  export type ArticleCreateOrConnectWithoutCategoriesInput = {
    where: ArticleWhereUniqueInput;
    create: XOR<
      ArticleCreateWithoutCategoriesInput,
      ArticleUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type CategoryCreateWithoutArticlesInput = {
    name: string;
    description?: string | null;
  };

  export type CategoryUncheckedCreateWithoutArticlesInput = {
    id?: number;
    name: string;
    description?: string | null;
  };

  export type CategoryCreateOrConnectWithoutArticlesInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutArticlesInput,
      CategoryUncheckedCreateWithoutArticlesInput
    >;
  };

  export type ArticleUpsertWithoutCategoriesInput = {
    update: XOR<
      ArticleUpdateWithoutCategoriesInput,
      ArticleUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      ArticleCreateWithoutCategoriesInput,
      ArticleUncheckedCreateWithoutCategoriesInput
    >;
    where?: ArticleWhereInput;
  };

  export type ArticleUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ArticleWhereInput;
    data: XOR<
      ArticleUpdateWithoutCategoriesInput,
      ArticleUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type ArticleUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: AuthorUpdateOneRequiredWithoutArticlesNestedInput;
  };

  export type ArticleUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type CategoryUpsertWithoutArticlesInput = {
    update: XOR<
      CategoryUpdateWithoutArticlesInput,
      CategoryUncheckedUpdateWithoutArticlesInput
    >;
    create: XOR<
      CategoryCreateWithoutArticlesInput,
      CategoryUncheckedCreateWithoutArticlesInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutArticlesInput,
      CategoryUncheckedUpdateWithoutArticlesInput
    >;
  };

  export type CategoryUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryOnArticleCreateManyArticleInput = {
    categoryId: number;
  };

  export type CategoryOnArticleUpdateWithoutArticleInput = {
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
  };

  export type CategoryOnArticleUncheckedUpdateWithoutArticleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number;
  };

  export type CategoryOnArticleUncheckedUpdateManyWithoutArticleInput = {
    categoryId?: IntFieldUpdateOperationsInput | number;
  };

  export type ArticleCreateManyAuthorInput = {
    id?: number;
    title: string;
    content: string;
    summary?: string | null;
    coverImage?: string | null;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ArticleUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: CategoryOnArticleUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: CategoryOnArticleUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryOnArticleCreateManyCategoryInput = {
    articleId: number;
  };

  export type CategoryOnArticleUpdateWithoutCategoryInput = {
    article?: ArticleUpdateOneRequiredWithoutCategoriesNestedInput;
  };

  export type CategoryOnArticleUncheckedUpdateWithoutCategoryInput = {
    articleId?: IntFieldUpdateOperationsInput | number;
  };

  export type CategoryOnArticleUncheckedUpdateManyWithoutCategoryInput = {
    articleId?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
