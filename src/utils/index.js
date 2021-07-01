const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
}) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    udatedAt: updated_at,
})

module.exports = { mapDBToModel }