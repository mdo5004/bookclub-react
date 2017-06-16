export function createNewComment(comment) {
    return { type: 'UPDATE_DISCUSSION', payload: comment}
}