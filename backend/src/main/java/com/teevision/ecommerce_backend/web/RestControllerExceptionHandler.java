package com.teevision.ecommerce_backend.web;

import com.teevision.ecommerce_backend.product.exceptions.QuantityIsInRestrictionRangeException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestControllerExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleInvalidArguments(IllegalArgumentException e) {
        return new ErrorResponse(e.getClass().getTypeName(), e.getMessage());
    }

    @ExceptionHandler(ReferentialIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ErrorResponse handleReferentialIntegrityViolationException(ReferentialIntegrityViolationException e) {
        return new ErrorResponse(e.getClass().getTypeName(), e.getMessage());
    }

    @ExceptionHandler({QuantityIsInRestrictionRangeException.class})
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ErrorResponse handleQuantityRestrictionException(QuantityIsInRestrictionRangeException e) {
        return new ErrorResponse(e.getClass().getSimpleName(), e.getMessage());
    }

    @ExceptionHandler(RecordAlreadyExistsException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicateKeys(RecordAlreadyExistsException e) {
        return new ErrorResponse(e.getClass().getTypeName(), e.getMessage());
    }

    @ExceptionHandler(RecordNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleRecordNotFoundException(RecordNotFoundException e) {
        return new ErrorResponse(e.getClass().getTypeName(), e.getMessage());
    }

//    @ExceptionHandler(AccessDeniedException.class)
//    @ResponseStatus(HttpStatus.FORBIDDEN)
//    public ErrorResponse handleAccessDenied(AccessDeniedException e) {
//        return new ErrorResponse(e.getMessage());
//    }

    @ExceptionHandler(Throwable.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleOtherErrors(Throwable e) {
        e.printStackTrace();
        return new ErrorResponse(e.getClass().getTypeName(), e.getMessage());
    }
}


