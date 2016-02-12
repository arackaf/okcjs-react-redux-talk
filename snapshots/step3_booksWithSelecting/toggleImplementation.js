            let newBooks = state.books.concat();
            let bookToUpdate = newBooks.find(b => b._id == action._id);
            let index = newBooks.indexOf(bookToUpdate);

            newBooks[index] = Object.assign(bookToUpdate, { selected: !bookToUpdate.selected });

            return Object.assign({}, state, { books: newBooks });