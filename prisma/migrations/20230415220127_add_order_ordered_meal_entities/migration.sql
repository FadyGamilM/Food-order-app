-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "orderStatus" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderedMeal" (
    "id" SERIAL NOT NULL,
    "mealId" INTEGER NOT NULL,
    "units" INTEGER NOT NULL DEFAULT 1,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderedMeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_code_key" ON "Order"("code");

-- CreateIndex
CREATE UNIQUE INDEX "OrderedMeal_mealId_key" ON "OrderedMeal"("mealId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedMeal" ADD CONSTRAINT "OrderedMeal_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
