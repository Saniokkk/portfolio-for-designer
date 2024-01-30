const BASE_URL_PROD = process.env.NEXT_PUBLIC_PROD_URL;
const BASE_URL_DEV = process.env.NEXT_PUBLIC_DEV_URL;

const baseUrl = process.env.NODE_ENV === 'production' ? BASE_URL_PROD : BASE_URL_DEV;

export async function getItem() {
  const res = await fetch(
    `${baseUrl}/api`,
    { cache: "no-store" },
  );
  const result = await res.json();

  return result.data;
}


export async function createOrder(data) {
  try {
    const response = await fetch(`${baseUrl}/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        //   data: {
        //     category: "new collection",
        //     product: "some name",
        //     phone: "123123123",
        //     email: "asd@asd.com",
        //     full_name: "vasya vasya",
        //     city: "some city",
        //     address: "any address",
        //   },
        data,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}

