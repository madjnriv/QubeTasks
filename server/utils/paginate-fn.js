export const paginateFn = async ({
  model,
  query,
  page = 0,
  limit = 10,
  sortBy = "desc",
  populateOptions = [],
}) => {
  const skip = page * limit;
  const sort = sortBy === "asc" ? { createdAt: 1 } : { createdAt: -1 };

  let mongooseQuery = model.find(query).skip(skip).limit(limit).sort(sort);

  if (populateOptions.length > 0) {
    populateOptions.forEach((option) => {
      mongooseQuery = mongooseQuery.populate(option);
    });
  }

  const [total, data] = await Promise.all([
    model.countDocuments(query),
    mongooseQuery,
  ]);

  const totalPages = Math.ceil(total / limit);
  const result = {
    data,
    total,
    totalPages,
    page,
  };

  if (page < totalPages - 1) {
    result.nextPage = page + 1;
  }

  if (page > 0) {
    result.prevPage = page - 1;
  }

  return result;
};
