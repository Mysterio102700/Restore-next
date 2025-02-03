export function generateSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/[\u2122™]/g, "")
        .replace(/\b(the|a|an|and|of|for)\b/g, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}